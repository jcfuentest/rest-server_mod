
const {Schema, model} = require('mongoose')



const squemaUsuario =  Schema({

    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique:true
        
    },
    password:{
        type: String,
        required: true
    },
    img:{
        type: String,
      
    },
    rol:{
        type: String,
        required: true,
        emun: ['ADMIN_ROLE, USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }

});

squemaUsuario.methods.toJSON = function() {
  const {__v, password, _id, ...elresto} = this.toObject();
  elresto.uid = _id
  return elresto  
}

const modelo = model('Usuario', squemaUsuario );

module.exports = modelo;