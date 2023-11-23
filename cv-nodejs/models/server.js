const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:       '/api/auth',
            usuarios:   '/api/usuarios',
            trabajos:   '/api/trabajos',
            postulaciones:   '/api/postulaciones',
            entrevistas:   '/api/entrevistas',
        }

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.trabajos, require('../routes/trabajos'));
        //this.app.use( this.paths.postulaciones, require('../routes/postulaciones'));
        //this.app.use( this.paths.entrevistas, require('../routes/entrevistas'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
