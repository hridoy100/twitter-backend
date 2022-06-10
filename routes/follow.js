var express = require('express');
const {isOK} = require("../util/util");
var router = express.Router();
const followDB = require('../db/follow_db');
const userDB = require('../db/user_db');

router.post('/', async function(req, res, next) {
    const {myID, followingID} = req.body;
    if(!isOK(myID) || !isOK(followingID)){
        res.status(400).send('Username or Tweet cannot be empty!');
        return;
    }
    if(myID===followingID){
        res.status(400).send('You cannot follow yourself!');
        return;
    }
    // does followingID user exists?
    var result = await userDB.getUserByUserID(followingID);
    if(!isOK(result)){
        //user doesn't exist.
        res.status(500).send("Requested user doesn't exists!");
        return;
    }
    // user exists..
    try {
        const result = await followDB.addFollowing(myID, followingID);
        res.send("You are now following user: " + followingID);
    }
    catch (e){
        if(e.sqlMessage.includes("Duplicate entry")){
            res.status(400).send("You are already following this user");
            return;
        }
        res.status(400).send(e);
    }
});

module.exports = router;