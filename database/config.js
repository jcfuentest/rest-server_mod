const {connect} = require('mongoose')

const conexionMongo =  async () => {

try {

   await connect(process.env.CONN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log('mongo conectado');
    
} catch (error) {

    throw new Error('ERRR DE CONEXION')
    
}


}

module.exports = {conexionMongo};