const express = require('express');

const weatherRoutes = require('./routes/weather.js');
const errorController = require('./controllers/error.controller.js')

const app = express();

require('dotenv').config();
app.use(express.json());
app.use('/api', weatherRoutes);
app.use(errorController.sendUrlNotFound)

app.listen(3000, ()=>{
    console.log('server running on port 3000')
});