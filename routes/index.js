var express = require('express');
const control = require('../controller/controlle');
const { connect } = require('../database/db');
const data = require('../modele/requete');
var  jwt  = require ( 'jsonwebtoken' ) ;
var router = express.Router();
const { verifi } = require("../modele/token");
const auto = require('../modele/authentification');



/* GET home page. */





router.get('/',control.affiche)
router.post('/',control.creation)
router.put('/:id',control.modifiesLivres)
router.delete('/:id',control.supprimeLivres)



router.get('/categories',control.afficheCategories)
router.post('/categories' ,control.inserer)
router.put('/categories/:id',control.modifiesCategories)
router.delete('/categories/:id',control.supprimeCategories)





router.post('/user',control.ajout_user)



 


module.exports = router;
