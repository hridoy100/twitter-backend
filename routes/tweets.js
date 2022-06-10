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

router.get('/user/:userName', async function(req, res, next) {
    const userName = req.params.userName;
    const result = await tweetDB.getAllMyTweets(userName);
    res.send(JSON.stringify(result));
});

router.get('/feed/:id', async function(req, res, next) {
    const userID = req.params.id;
    const result = await tweetDB.getNewsFeed(userID);
    res.send(JSON.stringify(result));
});

module.exports = router;