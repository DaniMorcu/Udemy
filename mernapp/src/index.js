const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const routes = require('./routes/task.routes');
const app = express();

// Settings

// Configurar el puerto configurado en el servicio de la nube (cuando se despliega)
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/task', routes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});