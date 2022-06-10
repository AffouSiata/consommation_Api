const jwt  = require ( 'jsonwebtoken' ) ;



const  authenticateJWT =class{

    static creetoken = (data)=>{
        let users = {...data}
       
            let token = jwt.sign(users,"anNvbnRva2Vu");  
            console.log(token);
            return token
    }

    static authen =(token)=>{
        console.log("validetoken",token);
        try  {
            
           const verification =   jwt.verify(token, "anNvbnRva2Vu") 
           console.log("token verifie",verification);
           return verification;
                  
        } catch(error) {
            console.log("token invalid",error)
            return res.status(401).json({
                message:"token invalid"
            })
        }

    }
}
module.exports = authenticateJWT;
