var express = require('express');
const control = require('../controller/controlle');
const { connect } = require('../database/db');
const data = require('../modele/requete');
var  jwt  = require ( 'jsonwebtoken' ) ;
var router = express.Router();
const { verifi } = require("../modele/token");
const auto = require('../modele/authentification');



/* GET home page. */





router.get('/',auto,control.affiche)
router.post('/',auto,control.creation)
router.put('/:id',auto,control.modifiesLivres)
router.delete('/:id',auto,control.supprimeLivres)



router.get('/categories',auto,control.afficheCategories)
router.post('/categories',auto,control.inserer)
router.put('/categories/:id',auto,control.modifiesCategories)
router.delete('/categories/:id',auto,control.supprimeCategories)



 


module.exports = router;
