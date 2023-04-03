const moment = require('moment');


// MOJ LOGGER.
const mojLogger = (req, res, next) => {
    // console.log(`${moment().format()} - ${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(`${moment().format()} - ${req.method} - ${req.protocol}://`); //${req.get('host')}${req.originalUrl}`);
    // next();
}


// Validacija sheme strani ob vnosu (POST) in ob spremembi (PUT).
function validacijaStrani(stran) {
    const schema = {
        idstrani: Joi.number().integer().min(100).max(900).required(),
        naslov: Joi.string().max(40).required(),
        vsebina: Joi.string().min(10).max(250).required()
    };

    return Joi.validate(stran, schema);
}

// Normalizacija vrat.
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    // named pipe
    if (isNaN(port)) { return val; }

    // port number
    if (port >= 0) { return port; }
  
    return false;
  }


module.exports = normalizePort;
module.exports = validacijaStrani;
module.exports = mojLogger;