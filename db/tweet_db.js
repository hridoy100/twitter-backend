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

const getMyTweets = (userID, isNext, time) => {
    let sql = `SELECT * FROM tweet WHERE tUserID=?`;
    if(isNext===0)
        sql = sql + ' limit 100';
    else if(isNext===-1)
        sql = sql + ' And tCreatedAt<=' + time + ' limit 100';
    else if(isNext===1)
        sql = sql + ' And tCreatedAt>' + time + ' limit 100';
    console.log(sql);
    let value = [[userID]];
    return new Promise((resolve, reject) => {
        con.query(sql, [value], (err, rows) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}

const getNewsFeed = (userID, isNext, time) => {
    let sql = 'SELECT * FROM tweet WHERE tUserID IN (SELECT fFollowingID from follower where fUserID=?)';
    if(isNext===0)
        sql = sql + ' ORDER BY tCreatedAt DESC limit 100';
    else if(isNext===-1)
        sql = sql + ' And tCreatedAt<=' + time + ' ORDER BY tCreatedAt DESC limit 100';
    else if(isNext===1)
        sql = sql + ' And tCreatedAt>' + time + ' ORDER BY tCreatedAt DESC limit 100';

    let value = [[userID]];
    return new Promise((resolve, reject) => {
        con.query(sql, [value], (err, rows) => {
            if (err) return reject(err);
            // console.log(rows);
            return resolve(rows);
        });
    });
}

module.exports = {insertTweet, getMyTweets, getNewsFeed};