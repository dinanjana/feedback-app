const feedbacksService = require('../../service/feedback/index');
const logger = require('../../service/log/index').logger;
const config = require('../../../configs/index');

const handlers = [{
    path: '/feedbacks',
    handlers: {
        /**
         * Get all feedbacks
         * */
        'get': async (req, res) => {
            try {
                const result = await feedbacksService.getFeedbacks();
                return res.send(result)
            } catch (e) {
                logger.error(e);
                return res.status(500).send(config.INTERNAL_SERVER_ERRO_MSG);
            }
        },

        /**
         * Add a feedback
         * */
        'post': async (req, res) => {
            try {
                const result = await feedbacksService.addFeedback(req.body);
                return res.status(201).send(result);
            } catch (e) {
                logger.error(e);
                return res.status(500).send(config.INTERNAL_SERVER_ERRO_MSG);
            }
        }
    }
}];

module.exports = {
    handlers,
};