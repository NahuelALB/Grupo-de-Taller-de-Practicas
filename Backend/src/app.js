const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3030;

//Importando recursos de la API
const applicantsRoute = require('./routes/applicantsRoute');
const professionsRoute = require('./routes/professionsRoute');
//Rutas o Endpoints de nuestra API
app.use('/applicants', applicantsRoute);
app.use('/professions', professionsRoute);
//Recurso de archivos estáticos PUBLIC
app.use(express.static('public'));
//Capturar información que viaja por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Error 404 not found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
//Levantamiento del servidor
app.listen(PORT, () => {
  console.log(`servidor andando en el puerto http://localhost:${PORT}`);
});
