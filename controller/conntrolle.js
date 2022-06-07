const { connect } = require("../database/db");
const data = require("../modele/requete");




const control = class{
    static creation= (req=request,res=response)=>{
        console.log('mmmmmmm',req.body);
        data.insertion(req.body)
        res.json(req.body)
    }
    static affiche= (req=request,res=response)=>{
       data.selection().then(resultat=>{
           res.json(resultat)
       })
       .catch(error=>{
            console.log("erreur",error);
       })
    }
    static inserer =(req=request,res=response)=>{
        console.log("cccccccc",req.body);
        data.insertion_categories(req.body);
        // res.json(req.body)
    }


}
module.exports=control;