const express = require('express');
const { getConnection } = require('./db/connect-mongo');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


getConnection();


require('./models/Genero');
require('./models/Director');
require('./models/Productora');
require('./models/Tipo');
require('./models/Media');


app.use(express.json());
app.use(cors());

// Rutas
app.use('/genero', require('./routes/genero'));
app.use('/director', require('./routes/director'));
app.use('/productora', require('./routes/productora'));
app.use('/tipo', require('./routes/tipo'));
app.use('/media', require('./routes/media'));


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
