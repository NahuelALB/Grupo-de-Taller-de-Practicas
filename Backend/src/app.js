const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3030;

//Importando recursos de la API
const applicantsRoute = require('./routes/applicantsRoute');
const professionsRoute = require('./routes/professionsRoute');
//Rutas o Endpoints de nuestra API
app.use('/applicants', applicantsRoute);
app.use('/professions', professionsRoute);
//Levantamiento del servidor
app.listen(PORT, () => {
  console.log(`servidor andando en el puerto http://localhost:${PORT}`);
});
