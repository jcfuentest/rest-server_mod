const express = require('express');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //exposicion de fron
        this.meddleware();
        //rutas
        this.routes();


    }

    meddleware(){
        //directorio publico
        this.app.use(express.static('public'))
        this.app.use(express.json());
    }
    routes(){

        this.app.use('/api/usuario', require('../routes/user'))
       
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`nevegando en el puerto ${process.env.PORT}`);
        });
    }
}

module.exports = Server;


