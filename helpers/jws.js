const jwt = require('jsonwebtoken');


const crearJwt = ( uid= '')=>{
    return new Promise((resolve, reject )=>{
        const payload = {uid}

        jwt.sign(payload, process.env.SECRETJWT, {
            expiresIn: '4h'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject('no se pude generar el jwt')
            }
            resolve(token)
        })
    })
}

module.exports = {
    crearJwt
}