const con = require("./db_connection");

const insertTweet = (tweet, userName) => {
    let sql = `INSERT INTO tweet (tUserName, tText, tCreatedAt) VALUES ?;`;
    let values = [[userName, tweet, new Date().getTime()]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], function (err, result) {
            if(err) return reject(err);
            return resolve(result);
        });
    });
}

const getAllMyTweets = (userName) => {
    let sql = `SELECT * FROM tweet WHERE tUserName=?`;
    let value = [[userName]];
    return new Promise((resolve, reject) => {
        con.query(sql, [value], (err, rows) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}

module.exports = {insertTweet, getAllMyTweets};