var express = require('express');
const control = require('../controller/conntrolle');
const { connect } = require('../database/db');
const data = require('../modele/requete');
var router = express.Router();


/* GET home page. */

router.get('/',control.affiche)
router.post('/',control.creation)
router.post('/categories',control.inserer)
 


module.exports = router;
