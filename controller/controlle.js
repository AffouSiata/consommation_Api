const express = require("express");
const { connect } = require("../database/db");
const data = require("../modele/requete");
let { jwt } = require("jsonwebtoken");






const control = class{
    static creation= (req=request,res=response)=>{
        console.log('mmmmmmm',req.body);
        data.insertion(req.body)
        res.json(req.body)
    }

    static inserer =(req=request,res=response)=>{
        console.log("cccccccc",req.body);
        data.insertion_categories(req.body);
        // res.json(req.body)
    }
    static affiche= (req=request,res=response)=>{
       data.selection().then(resultat=>{
           res.json(resultat)
       })
       .catch(error=>{
            console.log("erreur",error);
       })
    }
    static afficheCategories= (req=request,res=response)=>{
        data.selectionCat().then(resultat=>{
            res.json(resultat)
        })
        .catch(error=>{
             console.log("erreur",error);
        })
     }


   
    static modifiesLivres =(req=request,res=response)=>{
    
        data.modifie_livres(req.body).then(resultat =>{
            res.json("votre modification a bien recu")
        }).catch(error=>{
            res.json(error);
        })
        // console.log("rrrrr",req.body)     

    }
    static modifiesCategories =(req=request,res=response)=>{
        data.modifie_categories(req.body).then(resultat=>{
            res.json("la modification d'un categorie a bien été modifié")
        }).catch(error=>{
            res.json("la modification d'un categorie a echoué")
        })
        

    }
    static supprimeLivres =(req=request,res=response)=>{
        data.supprime_livre(req.params.id).then(resultat=>{
            res.json("la suppression a reussi")
        }).catch(error=>{
            res.json(error)
        })
       
        
    }


    static supprimeCategories =(req=request,res=response)=>{
        data.supprime_categorie(req.params.id).then(resultat=>{
            res.json("la suppression a reussi")
        }).catch(error=>{
            res.json(error)
        })
        // console.log('rrrrrrrr',req.body);
       
    }


}
module.exports=control;