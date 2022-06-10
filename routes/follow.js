var express = require('express');
const {isOK, validateToken} = require("../util/util");
var router = express.Router();
const followDB = require('../db/follow_db');
const userDB = require('../db/user_db');

router.post('/', async function(req, res, next) {
    try {
        const verified = validateToken(req);
        if (!verified) {
            // Access Denied
            return res.status(401).send("Access Denied");
        }
    }
    catch (e){
        // Access Denied
        return res.status(401).send(e);
    }
    const {myID, followingID} = req.body;
    if(!isOK(myID) || !isOK(followingID)){
        return res.status(400).send('Username or Tweet cannot be empty!');
    }
    if(myID===followingID){
        return res.status(400).send('You cannot follow yourself!');
    }
    // does followingID user exists?
    var result = await userDB.getUserByUserID(followingID);
    if(!isOK(result)){
        //user doesn't exist.
        return res.status(500).send("Requested user doesn't exists!");
    }
    // user exists..
    try {
        const result = await followDB.addFollowing(myID, followingID);
        res.send("You are now following user: " + followingID);
    }
    catch (e){
        if(e.sqlMessage.includes("Duplicate entry")){
            return res.status(400).send("You are already following this user");
        }
        return res.status(400).send(e);
    }
});

module.exports = router;