const winston = require('winston');
const logDAO = require('../../repository/log');

const errorLogFile = 'logs/error.log';
const combinedLogFile = 'logs/combined.log';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: errorLogFile, level: 'error' }),
        new winston.transports.File({ filename: combinedLogFile }),
    ],
});

const shipLogFiles = async () => {
    const errorLogFileLocation = `error${Date.now()}.log`;
    const applicationLogFile = `application${Date.now()}.log`;
    await logDAO.uploadLogFiles(errorLogFile, errorLogFileLocation);
    await logDAO.uploadLogFiles(combinedLogFile, applicationLogFile);
    return {
        errorLogFile,
        applicationLogFile
    }
};

module.exports = {
    logger,
    shipLogFiles,
};