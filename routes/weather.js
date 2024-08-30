const {Router} = require('express');
const router = Router();

const weatherController = require('../controllers/weather.controller');
const errorController = require('../controllers/error.controller')

router
.route('/weather')
.get(weatherController.fetchWeatherByCity);

router.use(errorController.sendUrlNotFound);


module.exports = router

