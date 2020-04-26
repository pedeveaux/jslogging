//Import Modules
const { createLogger, format, transports } = require('winston');

//Logger configuration
const LogConfiguration = {
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize({ all: true }),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(
                    msg => `$[${msg.level}]${msg.timestamp} ${msg.message.toLocaleLowerCase()}`

                )
            )
        }),
        new transports.File({
            level: 'info',
            filename: './logs/app.log',
            format:format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(
                    msg => `$[${msg.level}]${msg.timestamp} ${msg.message.toLocaleLowerCase()}`
                )
            )
        })
    ],
    exitOnError: false,

};

//Create the Logger
const logger = createLogger(LogConfiguration);

module.exports = logger;
