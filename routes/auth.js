const { Router, request }  = require('express');
const { login } = require('../controlller/login');
const { check } = require('express-validator');
const { validadorExisteEmail, usuarioActivo } = require('../helpers/valida-rol');
const { validatorExpress } = require('../meddlewwere');

const router = Router();


router.post('/login',[
    check('correo', 'no es un correo valido').isEmail(),
    check('correo').custom(item => validadorExisteEmail(item)),
    check('correo').custom(mail=> usuarioActivo(mail)),
    validatorExpress
], login );


module.exports = router