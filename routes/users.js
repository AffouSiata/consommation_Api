var express = require('express');
const usercont = require('../controller/usercontrol');
var router = express.Router();


/* GET users listing. */
router.post('/',usercont.utilisateur) 
  


module.exports = router;
