const axios = require('axios');

const fetchWeatherByCity = async (req, res) => {
    try {
        const { city } = req.query;

        if (!city || (city && city.length <= 0)) {
            let message = "";
            city ? message = "Please Enter the City Name" : message = "City name is required";

            res.status(400).json({ message })
        }

        const weatherStackAPIKey = process.env.WEATHERSTACK_API_KEY;

        const weatherReponse = await axios.get
          (`http://api.weatherstack.com/current?access_key=${weatherStackAPIKey}&query=${city}`)

        if(weatherReponse?.data?.success == false){
            return res.status(500).json({success: false, message: 'Something went wrong'})
        }
        res.status(200).json({data: weatherReponse?.data?.current})

    }
    catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
}



module.exports = {
    fetchWeatherByCity,
}