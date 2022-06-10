var express = require('express');
const isOK = require("../util/util");
var router = express.Router();
const tweetDB = require('../db/tweet_db');


router.post('/create', async function(req, res, next) {
    const {userName, tweet} = req.body;
    if(!isOK(userName) || !isOK(tweet)){
        res.status(400).send('Username or Tweet cannot be empty!');
        return;
    }
    const result = await tweetDB.insertTweet(tweet, userName);
    console.log(result);
    res.send(req.body);
});

module.exports = router;