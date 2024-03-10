const express = require('express');
const app = express();
const cors = require('cors');

//Variables de entorno
require('dotenv').config();
const port = process.env.PORT || 3030;

//Capturar información que viaja por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Deshabilitar el header X-Powered-By: Express
app.disable('x-powered-by');

//Habilitación de los dominios con CORS
app.use(
  cors({
    origin: (origin, cb) => {
      const accept_origin = ['http://localhost:5173'];

      if (accept_origin.includes(origin)) {
        return cb(null, true);
      } else if (!origin) {
        return cb(null, true);
      } else {
        return cb(new Error('Not allowed by CORS'));
      }
    },
  }),
);

//Importando recursos de la API
const applicantsResource = require('./routes/applicantsRoutes');
const professionsResource = require('./routes/professionsRoutes');
const filesResource = require('./routes/filesRoutes');
app.use('/applicants', applicantsResource);
app.use('/professions', professionsResource);
app.use('/files', filesResource);

//Error 404 not found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

//Levantamiento del servidor
app.listen(port, () => {
  console.log(`Server running in the port -> http://localhost:${port}`);
});
