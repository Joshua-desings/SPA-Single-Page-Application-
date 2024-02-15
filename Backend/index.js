const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json());

const authRoutes = require('./src/routes/auth.js')

app.use('/api/user', authRoutes)

const URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@farmacia.dbkfd9e.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URI)
.then( () => {
  console.log('Se conecto a MongoDB')
})
.catch(err => console.log(err))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});