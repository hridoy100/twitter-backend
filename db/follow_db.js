const con = require("./db_connection");

const addFollowing = (userID, followingID) => {
    let sql = `INSERT INTO follower (fUserID, fFollowingID, fFollowedDate) VALUES ?;`;
    let values = [[userID, followingID, new Date().getTime()]];
    return new Promise((resolve, reject) => {
        con.query(sql, [values], function (err, result) {
            if(err) return reject(err);
            return resolve(result);
        });
    });
}
module.exports = {addFollowing};
