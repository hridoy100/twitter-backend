var express = require('express');
const isOK = require("../util/util");
var router = express.Router();
const followDB = require('../db/follow_db');

router.post('/:id', async function(req, res, next) {
    const {userID} = req.body;
    const followingID = req.params.id;
    if(!isOK(userID) || !isOK(followingID)){
        res.status(400).send('Username or Tweet cannot be empty!');
        return;
    }
    if(userID===followingID){
        res.status(400).send('You cannot follow yourself!');
        return;
    }

    const result = await followDB.addFollowing(userID, followingID);
    console.log(result);
    res.send(req.body);
});

module.exports = router;