const con = require("./db_connection");

const insertTweet = (tweet, userID) => {
    let sql = `INSERT INTO tweet (tUserID, tText, tCreatedAt) VALUES ?;`;
    let values = [[userID, tweet, new Date().getTime()]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], function (err, result) {
            if(err) return reject(err);
            return resolve(result);
        });
    });
}

const getAllMyTweets = (userID) => {
    let sql = `SELECT * FROM tweet WHERE tUserID=?`;
    let value = [[userID]];
    return new Promise((resolve, reject) => {
        con.query(sql, [value], (err, rows) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}

const getNewsFeed = (userID) => {
    let sql = 'SELECT * FROM tweet WHERE tUserID IN (SELECT fFollowingID from follower where fUserID=?) ORDER BY tCreatedAt DESC;';
    let value = [[userID]];
    return new Promise((resolve, reject) => {
        con.query(sql, [value], (err, rows) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}

module.exports = {insertTweet, getAllMyTweets, getNewsFeed};