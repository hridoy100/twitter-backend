var express = require('express');
var md5 = require('md5');
var router = express.Router();
// var con = require('../db/db_connection');
const userDB = require('../db/user_db');

const isOK = require('../util/util');
const {getUser} = require("../db/user_db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', async function(req, res, next) {
  const {name, userName, password, birthDay} = req.body;
  if(!isOK(userName) || !isOK(password) || !isOK(name)){
    res.status(400).send('Username or Password cannot be empty!');
    return;
  }
  var user = {
    userName: userName,
    name: name,
    password: md5(password),
    bDay: new Date(birthDay).getTime()
  };
  console.log(await userDB.insertUser(user));
  res.send(req.body);
});

router.get('/:id', async function(req, res, next) {
  res.send(await getUser(req.params.id));
});

module.exports = router;
