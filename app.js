const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address) return console.error('please provide an address')

geocode(address, (error, {latitude, longitude, location, pluscodes} = {}) => {
    if (error) {
        return console.error(error)
    }

    forecast(latitude, longitude, (error, {weather_descriptions, temperature} = {}) => {
        if (error) {
            return console.error(error)
        }

        console.log(location, pluscodes)
        console.log(weather_descriptions, temperature)
    })
})

