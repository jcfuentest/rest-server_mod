

const { Router }  = require('express');
const { getUasuario, putUsuario ,postUsuario,deleteUsuario} = require('../controlller');


const router = Router();

  router.get('/', getUasuario )
  router.put('/:id', putUsuario )
  router.post('/', postUsuario )
  router.delete('/', deleteUsuario )

  module.exports = router;