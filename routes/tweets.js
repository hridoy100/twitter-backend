var express = require('express');
const {isOK, isNumeric} = require("../util/util");
var router = express.Router();
const tweetDB = require('../db/tweet_db');


router.post('/create', async function(req, res, next) {
    const {userID, tweet} = req.body;
    if(!isOK(userID) || !isOK(tweet)){
        res.status(400).send('Username or Tweet cannot be empty!');
        return;
    }
    if(!isNumeric(userID))
    {
        res.status(400).send('Incorrect Userid!');
        return;
    }
    try {
        const result = await tweetDB.insertTweet(tweet, userID);
        res.send("Tweet inserted successfully!");
    }
    catch (e){
        console.log(e);
        res.status(400).send('Error saving the tweet!');
    }
});

router.get('/my/:id', async function(req, res, next) {
    const id = req.params.id;
    const result = await tweetDB.getAllMyTweets(id);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

router.get('/feed/:id', async function(req, res, next) {
    const userID = req.params.id;
    const result = await tweetDB.getNewsFeed(userID);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

module.exports = router;