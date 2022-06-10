const express = require("express");
const authenticateJWT = require("../modele/token");
const router =  express.Router();



const usercont =class{
    static utilisateur= (req=request,res=response)=>{
        let auth = authenticateJWT.creetoken(req.body)
        res.json(auth)
        
    }
}
module.exports=usercont;