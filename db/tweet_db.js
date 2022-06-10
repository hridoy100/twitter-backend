const con = require("./db_connection");

const insertTweet = (tweet, username) => {
    let sql = `INSERT INTO tweet (tUserName, tText, tCreatedAt) VALUES ?;`;
    let values = [[username, tweet, new Date().getTime()]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], function (err, result) {
            if(err) return reject(err);
            return resolve(result);
        });
    });
}

module.exports = {insertTweet};