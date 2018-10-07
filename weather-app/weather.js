const request = require('request');

const getWeather = (lat, lng) => {
    return new Promise((resolve, reject) => {
            request({
                    url: `https://api.darksky.net/forecast/0087ab31a17df13dca776af5452aa3f5/${lat},${lng}`
                }, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(body.currently.temperature);
                } else {
                    reject('Unable to fetch weather');
                }
            })
    });

}

module.exports = {
    getWeather
};
