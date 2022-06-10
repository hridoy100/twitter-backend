var con = require('../db/db_connection');

const getAllUsers = () =>  {
    return new Promise((resolve, reject) => {
        con.query('SELECT * from user', (err, rows, fields) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}
const getUserByUserName = (userName) =>  {
    let sql = 'SELECT * from user where uUserName=?';
    let values = [[userName]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], (err, rows, fields) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows[0]);
        });
    });
}
const getUserByUserID = (userID) =>  {
    let sql = 'SELECT * from user where uID=?';
    let values = [[userID]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], (err, rows, fields) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows[0]);
        });
    });
}

const insertUser = (user) => {
    let sql = `INSERT INTO user (uUserName, uName, uPassword, uBirthday, uCreatedAt) VALUES ?;`;
    let values = [[user.userName, user.name, user.password, user.bDay, new Date().getTime()]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], function (err, result) {
            if(err) return reject(err);
            return resolve(result);
        });
    });
}

module.exports = {getAllUsers, insertUser, getUserByUserName, getUserByUserID};