const feedbacksService = require('../../service/feedback');
const logger = require('../../service/log').logger;
const config = require('../../configs');

const handlers = [{
    path: '/feedbacks',
    handlers: {
        'get': async (req, res) => {
            try {
                const result = await feedbacksService.getFeedbacks();
                return res.send(result)
            } catch (e) {
                logger.error(e);
                return res.status(500).send(config.INTERNAL_SERVER_ERRO_MSG);
            }
        },
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