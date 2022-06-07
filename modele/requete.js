const control = require("../controller/conntrolle");
const connect  = require("../database/db");

const data = class{
    static insertion =(donnee)=>{
        let{nom_livre, nom_auteur_livre,date_ajout,date_mise,id_categorie}=donnee
        console.log("edezdzdrer",donnee);
        let inserer = "INSERT INTO livres ( nom_livre ,nom_auteur_livre, date_ajout, date_mise, id_categorie)VALUES(?,?,?,?,?)";
        connect.query(inserer,[nom_livre ,nom_auteur_livre,  date_ajout, date_mise, id_categorie],(error,resultat)=>{
            if(error){
                    console.log(error)
                    
            }
            else{
                    console.log(resultat);

                }
     
        })

    }
    static selection =()=>{

        return new Promise((resolve,reject)=>{
            connect.query('SELECT * FROM livres',function(error,resultat){
                if(error){
                    console.log("error",error);
                    reject(error)
                    
                }
                else{
                    // console.log("resultat",resultat);
                    resolve(resultat);
                }
            })
        })
       
    }
    static insertion_categories =(data)=>{
        let {nom_categorie,data_ajout,date_mise}=data
        let requete= "INSERT INTO categories ( nom_categorie , date_ajout_cat, date_mise_cat)VALUES(?,?,?)";
        connect.query(requete,[nom_categorie,new Date(),new Date()],function(error,resultat){
            if(error){
                console.log("error",error);
            }
            else{
                console.log("result",resultat);
            }
        })
    }
}
module.exports =data;