var express = require('express');
var md5 = require('md5');
var router = express.Router();
const userDB = require('../db/user_db');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const {isOK, isUserName, isString, isValidPassword} = require('../util/util');
// Set up Global configuration access
dotenv.config();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/create', async function (req, res, next) {
    const {name, userName, password, birthDay} = req.body;
    if (!isOK(userName) || !isOK(password) || !isOK(name)) {
        res.status(400).send('Username or Password cannot be empty!');
        return;
    }
    // username should be alphanumeric..
    if(!isUserName(userName)){
        res.status(400).send('Username should be alpha numeric!');
        return;
    }
    // name should be string..
    if(!isString(name)){
        res.status(400).send('Name should contain only A-Z or a-z english letters!');
        return;
    }
    // validate password..
    if(!isValidPassword(password)){
        res.status(400).send('Password should contain at least 6 characters followed by capital letters, special characters and numbers!');
        return;
    }

    var user = {
        userName: userName,
        name: name,
        password: md5(password),
        bDay: new Date(birthDay).getTime()
    };
    try {
        var result = await userDB.insertUser(user);
        res.send("created successfully");
    }
    catch (e){
        if(e.sqlMessage.includes("Duplicate entry")){
            res.status(400).send("This username is not available");
            return;
        }
        res.send(e.sqlMessage);
    }
});

router.post('/generate-token', async (req, res) => {
    // Validate User Here
    // Then generate JWT Token
    const {userName, password} = req.body;
    if (!isOK(userName) || !isOK(password)) {
        res.status(400).send('Username or Password cannot be empty!');
        return;
    }
    const user = await userDB.getUserByUserName(userName);
    if(!isOK(user)){
        res.status(400).send("User not found!");
        return;
    }
    if(!user.userName == userName || !md5(password) == user.password) {
        res.status(401).send("Invalid Credentials!");
        return;
    }
    console.log("user found!");
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: user.uID
    }
    console.log(data);
    console.log(jwtSecretKey);
    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
});

router.get('/id/:id', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(await userDB.getUserByUserID(req.params.id));
});

router.get('/username/:userName', async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(await userDB.getUserByUserName(req.params.userName));
});

module.exports = router;
