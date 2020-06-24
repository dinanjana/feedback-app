const _ = require('lodash');
const logger = require('../service/log/index').logger;

const registerHandlers = (app, handlers) =>
    _.map(handlers, ({ path, handlers}) => {
        _.map(handlers, (handler, method) => {
            logger.info(`Registering handler for ${method} in ${path}`);
            app[method](path, handler);
        })
});

module.exports = {
  registerHandlers
};