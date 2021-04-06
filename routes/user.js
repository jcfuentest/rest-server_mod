

const { Router, request }  = require('express');
const { getUasuario, putUsuario ,postUsuario,deleteUsuario} = require('../controlller');
const { check } = require('express-validator');
const {validatorExpress} = require('../meddlewwere/index')
const {validadorRol, validadorEmail, usuarioPorId,validadorRolAdmin} = require('../helpers/valida-rol');
const { valadarjwt } = require('../meddlewwere/validarJwt');



const router = Router();

  router.get('/', [
   
  ],getUasuario )

  router.put('/:id',[
    check('nombre', 'el nombre debe estar').notEmpty(),
    check('id', 'no es un id de mongo valido').isMongoId(),
    check('id').custom(usuarioPorId),
    validatorExpress
  ], putUsuario )

  router.post('/', [
    check('nombre', 'el nombre debe estar').notEmpty(),
    check('email', 'formato de correo no es el correcto').isEmail(),
    check('email').custom(email => validadorEmail(email)),
    check('password', 'debe contenenr al menos 6 caracteres').isLength({min:6}),
    check('rol').custom( rol => validadorRol(rol) ),
    validatorExpress
  ],postUsuario )

  router.delete('/:id',[
    valadarjwt,
    check('id', 'no es un id valido').isMongoId(),
    check('id').custom(usuarioPorId),
    check('id').custom(validadorRolAdmin),
    validatorExpress
  ], deleteUsuario )

  module.exports = router;