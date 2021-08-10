const pino = require('pino')

function Logger() {
    let logger

    if (process.env.NODE_ENV === 'production') {
        logger = pino({
            redact: ['req.headers.authorization'],
        })
    } else {
        const opts = {
            colorize: true,
        }

        logger = pino({
            prettyPrint: opts,
            level: 'debug',
        })
    }
}

module.exports.Logger = Logger
