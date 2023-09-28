const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings 
app.set('puerto',process.env.PORT|| 3000); 
app.set('nombreApp','Gestión de empleados'); 

//Archivo donde están las rutas
const apiRoutes = require('./routes/empleados.routes');

// Importa la función de conexión a la base de datos
const connectDB = require('./database'); 

// Configura Morgan para registrar solicitudes HTTP
app.use(morgan('dev'));

// Middlewares
app.use(express.json());
//Para conexiones exteriores
app.use(cors());

// Rutas
app.use('/api', apiRoutes);

module.exports = app;