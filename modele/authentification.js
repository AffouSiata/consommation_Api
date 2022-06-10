const authenticateJWT = require("./token");


async function auto (req,res,next)
{
    try{
        const recupere = req.header('autorisation')
        console.log('bbbbbbbb',recupere);
        if(!recupere){
            return res.status(401).json({
                message:"vous n'avez pas de token dans le header"
            })
        }
        authenticateJWT.authen(recupere)
        return next()
    }
    
    catch(error){
        return res.status(401).json({
            message:"token invalid"
        })
    }

}
module.exports= auto;

