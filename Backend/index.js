// Importar las dependencias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const URI = process.env.DB_STRING;
mongoose.connect(URI)
.then(
    console.log('Conectado a MongoDB!!!')
)
.catch(err => console.log(err))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});