

const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios')




const valadarjwt = async (req = request, res = response, next) => {

    const token = req.header('token')
     if(!token){
         return res.status(400).json({
             mdsg: "este n esw un mensaje de token corrsto"
         });
    }
try {

    const {uid}=  jwt.verify(token, process.env.SECRETJWT)
    req.usuarioAut = await Usuario.findById(uid)
    if (req.usuarioAut.estado===false) {
        return
    }
    req.uid = uid;
    next();
    
} catch (error) {

    console.log(error);
    res.status(401).json({
        msg: 'token no valid9'
    })
    
}
   

   
}

module.exports = {
    valadarjwt
}
