const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors')

const configs = require('./configs');
const feedbackHandlers = require('./ws/handler/feedback').handlers;
const utils = require('./ws/utils');
const loggerService = require('./ws/service/log');
const feedbackService = require('./ws/service/feedback');

const mongoConnector = require('./ws/repository/connectors/mongodb');

const logger = loggerService.logger;
const app = express();

app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/feedback-list', express.static('bin/www/build'));
app.use('/static',express.static('bin/www/build/static'));

utils.registerHandlers(app, feedbackHandlers);

mongoConnector.init().then(() => {
    loggerService.shipLogFiles().then(logfilesInfo => {
        feedbackService.addLogFileLocation(logfilesInfo);
    });
});


app.listen(configs.SERVER_PORT, () => logger.info(`feedback ws listening at http://localhost:${configs.SERVER_PORT}`));