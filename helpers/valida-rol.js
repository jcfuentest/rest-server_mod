const Role = require('../models/roles');
const Usuario = require('../models/usuarios');


const validadorRol = async(rol)=>{
    const existeRol = await Role.findOne({rol})
    if (!existeRol) {
      throw new Error(`el rol ${rol} no exist ne la base de datos`)
    }
    
  }

  const validadorEmail = async(email)=>{
    const ExisteCorreo = await Usuario.findOne({email})
    if (ExisteCorreo) {
            throw new Error (`el email ${email} ya existe en la base de datos`);
        }
    }
    
    const usuarioPorId = async(user)=>{
      const ExisteUsuario = await Usuario.findById(user)
      
      if (!ExisteUsuario) {
     
            throw new Error(`el id ${user} no se encuentra en la base de datos`);
          }
      }
  

  module.exports = {
      validadorRol,
      validadorEmail,
      usuarioPorId
  }