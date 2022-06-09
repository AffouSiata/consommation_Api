var express = require('express');
const control = require('../controller/controlle');
const { connect } = require('../database/db');
const data = require('../modele/requete');
var router = express.Router();


/* GET home page. */





router.get('/',control.affiche)
router.post('/',control.creation)
router.put('/:id',control.modifiesLivres)
router.delete('/:id',control.supprimeLivres)



router.get('/categories',control.afficheCategories)
router.post('/categories',control.inserer)
router.put('/categories/:id',control.modifiesCategories)
router.delete('/categories/:id',control.supprimeCategories)



router.post("/",control.token)

 


module.exports = router;
