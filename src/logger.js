import winston from 'winston';
import fs from 'fs';

/**
 * Logger
 */

// check if log dir exists
if(!fs.existsSync('./log')){
    fs.mkdirSync('./log');
}

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'log/combined.log'})
    ]
});

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger;