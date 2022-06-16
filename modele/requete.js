const control = require("../controller/controlle");
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

    static selectionCat =()=>{

        return new Promise((resolve,reject)=>{
            connect.query('SELECT * FROM categories',function(error,resultat){
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

    static modifie_livres = (modifi)=>{
        let {nom_livre, nom_auteur_livre ,date_ajout,id_categorie,id}=modifi
        return new Promise((resolve,reject)=>{
            let quete ="UPDATE livres SET nom_livre=? ,nom_auteur_livre=?, date_ajout=?, date_mise=?, id_categorie=? WHERE id= ?";
            connect.query(quete,[nom_livre, nom_auteur_livre , date_ajout, new Date(), id_categorie,id],function(error,resultat){
                if(error){
                    // console.log("error",error);
                    reject(error)
                }
                else{
                    // console.log("modifier un elements dans la base ",resultat);
                    resolve(resultat)
                }
            })
        })
       

    }
    static modifie_categories = (donne)=>{
        let {nom_categorie, date_ajout_cat,id_categorie}=donne
        return new Promise((resolve,reject)=>{
            let requete= "UPDATE categories SET  nom_categorie=? , date_ajout_cat=?, date_mise_cat=? WHERE id_categorie=?";
            connect.query(requete, [nom_categorie, date_ajout_cat,new Date(),id_categorie],function(error,resultat){
                if(error){
                    // console.log("error",error);
                    reject(error)
                }
                else{
                    // console.log("result",resultat);
                    resolve(resultat)
                }
            })
        })
       
    }
    static supprime_livre =(id)=>{
       return new Promise((resolve,reject)=>{
        let quete ="DELETE  FROM livres  WHERE id=?";
        connect.query(quete,[id],function(error,resultat){
            if(error){
                // console.log("error",error);
                reject(error)
               
               
            }
            else{
                //  console.log("Supprimer un elements dans la base ",resultat);
                 resolve(resultat)
               
            }
        })

       })  
    }
    static supprime_categorie =(id_categorie)=>{
        return new Promise((resolve,reject)=>{
            let quete ="DELETE  FROM categories  WHERE id_categorie=?";
            connect.query(quete,[id_categorie],function(error,resultat){
                if(error){
                    reject(error) 
                }
                else{

                    resolve(resultat)
                   
                }
            })
    
        })
    }

    static insertion_user= (data)=>{
        let {nom_user,email_user}=data;
        let apikey = "azerty";
        console.log("dddddd",data);
            let requet = "INSERT INTO users ( nom_user , email_user,apikey_user)VALUES(?,?,?)";
            connect.query(requet,[nom_user,email_user,apikey],function(error,resultat){
                if(error){
                    console.log("rrrrrerr",error);
                }
                else{
                    console.log("resultat",resultat);
                }

        })
    }
   
    static verifiApikey = (don)=>{
        return new Promise((resolve,reject)=>{
            connect.query("select * from users where apikey_user = ?",[don],(error,resultat)=>{
                if(error){
                    reject(error)
                }
                else{
                    resolve(resultat)
                }

            })
        })

    }
   
}
module.exports =data;