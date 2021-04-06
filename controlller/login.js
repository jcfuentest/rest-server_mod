

const {response, request} = require('express');
const bcrypjs = require('bcryptjs');
const Usuario = require('../models/usuarios');
const { crearJwt } = require('../helpers/jws');


const login =  async (req = request, res = response) => {


     
    try {
        const {correo, password} = req.body;

        const user = await Usuario.findOne({email:correo})
        const validator = await bcrypjs.compareSync(password, user.password)
        const jwt =await crearJwt(user.id)
        if (!validator) {

            return res.json({
                msg: "contraseña o usuario no son los correctos"
            });
            
        }

        res.json({
            payload:{
                user,
                jwt
            }
            

        })
        
    } catch (error) {

        console.log(error);

       res.status(500).json({
           msg: "hable con el administrador"
       })
        
    }



}

module.exports = {
    login
}