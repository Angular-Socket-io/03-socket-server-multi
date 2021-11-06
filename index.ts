import Server from './classes/server';
import router from './routes/router';
//import bodyParser from 'body-parser';
import express, { RequestHandler } from 'express';
import cors from 'cors';




const server = Server.instance;

// BodyParser
//server.app.use( bodyParser.urlencoded(extended:true));
server.app.use( express.json() as RequestHandler);
server.app.use( express.urlencoded({ extended: true }) as RequestHandler);




// CORS
server.app.use( cors({ origin: true, credentials: true, methods: ["GET", "POST"]  }) );


// Rutas de servicios
server.app.use('/', router );




server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});





