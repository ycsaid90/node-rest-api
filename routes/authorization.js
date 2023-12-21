var express = require('express')
var app = express();
var AuthorizationController = require('../src/authorization/authorizationController.js')

router.post( "/signup", AuthorizationController.register);
