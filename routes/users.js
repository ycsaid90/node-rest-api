var express = require('express');
var router = express.Router();
var UserController = require('../src/users/userController')

/* Router users. */
app.use('/', UserController.getAllUsers);
// app.use('/updateUserDetails', );
app.use('/signup', );
router.get("/",[IsAuthenticatedMiddleware.check, CheckPermissionMiddleware.has(roles.ADMIN)] , UserController.getAllUsers);


module.exports = router;
