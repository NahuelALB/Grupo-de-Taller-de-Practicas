const express = require('express');
const app = express();

//Variables de entorno
require('dotenv').config();
const port = process.env.PORT || 3030;

//Capturar información que viaja por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Deshabilitar el header X-Powered-By: Express
app.disable('x-powered-by');

//Importando recursos de la API
const applicantsResource = require('./routes/applicantsRoutes');
const professionsResource = require('./routes/professionsRoutes');
app.use('/applicants', applicantsResource);
app.use('/professions', professionsResource);

//Error 404 not found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

//Levantamiento del servidor
app.listen(port, () => {
  console.log(`Server running in the port -> http://localhost:${port}`);
});
