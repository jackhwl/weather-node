const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3c909cfc9d235e3eb62ae510f55442f7&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connecto to weather service!')
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            const data = body.current
            callback(undefined, data)
        }
    })
}

module.exports = forecast