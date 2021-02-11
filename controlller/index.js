
const {response, request} = require('express')


const getUasuario = (req = request, res = response)=> {

    const {nombre, apellido} = req.query
        res.json({
            msg: {
                nombre,
                apellido
            }
    
        })
      
}

const putUsuario = (req = request, res = response)=> {

    const {id} = req.params
    res.json({
        msg: id,

    })
  }

  const postUsuario = (req = request, res = response)=> {

    const  body = req.body

    res.json({
        msg: {
            body
        }

    })
  }

  const deleteUsuario = (req, res)=> {
    res.json({
        ok: 'delete api',
    })
  }



module.exports = {
    getUasuario,
    putUsuario,
    postUsuario,
    deleteUsuario
}
