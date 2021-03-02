const {model, Schema} = require('mongoose');


const usuarioSchema = Schema({

    rol: {
        require: [true, 'el rol debe ser obligatorio'],
        type: String

    }
});
module.exports = model('Roles', usuarioSchema)