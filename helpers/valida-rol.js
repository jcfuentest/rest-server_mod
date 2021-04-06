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

    const validadorExisteEmail = async(email)=>{
      const ExisteCorreo = await Usuario.findOne({email})
      if (!ExisteCorreo) {
              throw new Error (`el email ${email} no existe en la base de datos`);
          }
      }
    
    const usuarioPorId = async(user)=>{
      const ExisteUsuario = await Usuario.findById(user)
      
      if (!ExisteUsuario) {
     
            throw new Error(`el id ${user} no se encuentra en la base de datos`);
          }
      }

      const usuarioActivo = async(email)=>{
        const ExisteCorreo = await Usuario.findOne({email})
        if (ExisteCorreo) {
                if(!ExisteCorreo.estado){

                  throw new Error(`usuario no esta activo`);

                }
            }
        }

        const validadorRolAdmin = async(uid)=>{
          const valRol = await Usuario.findById(uid)
          console.log(valRol.rol);
          if (valRol.rol != 'ADMIN_ROLE') {
            throw new Error(` el ${valRol.rol} no puede eliminar datos`)
          }
          
        }

  

  module.exports = {
      validadorRol,
      validadorEmail,
      usuarioPorId,
      validadorExisteEmail,
      usuarioActivo,
      validadorRolAdmin
  }