
const {response, request} = require('express')
const bcrypjs = require('bcryptjs');
const Usuario = require('../models/usuarios')


const getUasuario = async(req = request, res = response)=> {

        const {limite, desde} = req.query;
        const query = {estado:true}

        

        // const dataMongo =   await Usuario.find(query)
        //        .limit(Number(limite))
        //        .skip(Number(desde));

        // const total = await Usuario.count(query)

        // esta es una forma de retornar en un arreglo una anidacion de async

        const [cantidadUsuarios, usuarios] = await Promise.all([
            Usuario.countDocuments(query),
            Usuario.find(query)
               .limit(Number(limite))
               .skip(Number(desde))

        ])
              
        res.json({
            cantidadUsuarios,
            usuarios

          
       })

      
}

const putUsuario = async(req = request, res = response)=> {
   
    const { id } = req.params
    
    const {password, google,email, ...wea } = req.body;
    const data = await Usuario.findByIdAndUpdate(id, wea, {new: true} )

    res.json({
        msg: data
    })


  }

  const postUsuario = async(req = request, res = response)=> {

    const {nombre, apellido , email, password , rol} = req.body;
    const usuario = new Usuario({nombre, email, apellido, password , rol});
     
    //esta es la encriptacion de password
    const salt = bcrypjs.genSaltSync();
    usuario.password = bcrypjs.hashSync(password, salt);
    
   await usuario.save( (err, data) =>{
       if(err) {
      
        return res.json({
            ok: false,
            msg: err
        })

       } else{

        res.json({
            ok: true,
            msg: data
        })

       }
       
   });

  }

  const deleteUsuario = async(req, res)=> {
    const { id } = req.params

    const {uid, usuarioAut} = req
    console.log(uid , 'este es le id capturado');
    console.log(usuarioAut, 'este es el uusario autenticado');
    
    const {password, google,email, ...wea } = req.body;
     const data = await Usuario.findByIdAndUpdate(id ,{estado: false}, {new:true } )

    res.json({
       msg: data,
       usuario_autenticado: usuarioAut
    })

  }
module.exports = {
    getUasuario,
    putUsuario,
    postUsuario,
    deleteUsuario
}
