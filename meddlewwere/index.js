const {validationResult} = require('express-validator');
const {request, response} = require('express')


const validatorExpress = (req = request, res= response, next) =>{
      const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({
            msg: err
        })
    }

    next();
}
  
module.exports = { validatorExpress}
   


