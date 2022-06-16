const express = require("express");
const { connect } = require("../database/db");
const data = require("../modele/requete");
let { jwt } = require("jsonwebtoken");
const { request, response } = require("express");
// const router = require("../routes/users");







const control = class{
    static creation= (req=request,res=response)=>{
       
        console.log('mmmmmmm',req.body);
        data.insertion(req.body)
        res.json(req.body)
    }

    static inserer =(req=request,res=response)=>{
      
        console.log("aaaaaaaa",apikey);

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
        const apikey = req.query.apikey
        if(apikey){
            data.verifiApikey(apikey)
            .then(resultat=>{
                // console.log(resultat);
                if(resultat == ''){
                 
                    res.json("apikey n'est pas correct")
                }
                else{
                    data.selectionCat().then(resultat=>{
                res.json(resultat)
                })
                .catch(error=>{
                    console.log("erreur",error);
                })
                }
                
            })
            .catch(error=>{
                
            })
            
        }
        else{
            res.json("apikey n'existe pas")
        }
       
        
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







    static ajout_user = (req=request,res=response)=>{
        data.insertion_user(req.body)
    }
    static sup_id_categorie =(req=request,res=response)=>{
        // console.log(req.params.id);
        data.selection_id_categories(req.params.id)
    }



}
module.exports=control;