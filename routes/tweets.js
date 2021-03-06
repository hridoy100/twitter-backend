var express = require('express');
const {isOK, isNumeric, validateToken} = require("../util/util");
var router = express.Router();
const tweetDB = require('../db/tweet_db');


router.post('/create', async function(req, res, next) {
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
    const {userID, tweet} = req.body;
    if(!isOK(userID) || !isOK(tweet)){
        return res.status(400).send('Username or Tweet cannot be empty!');
    }
    if(!isNumeric(userID))
    {
        return res.status(400).send('Incorrect Userid!');
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

router.post('/my/:id', async function(req, res, next) {
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
    const id = req.params.id;
    const {isNext, time} = req.body;
    const result = await tweetDB.getMyTweets(id, isNext, time);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

router.post('/feed/:id', async function(req, res, next) {
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
    const userID = req.params.id;
    const {isNext, time} = req.body;
    const result = await tweetDB.getNewsFeed(userID, isNext, time);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

module.exports = router;