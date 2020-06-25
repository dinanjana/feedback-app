const feedbackDAO = require('../../repository/feedback/index');

/**
 * Get all feedbacks
 * */
const getFeedbacks = () => feedbackDAO.getFeedbacks();


/**
 * Add a feedback
 * */
const addFeedback = ({name, stars, feedback}) => {
    const feedbackInfo = { name, stars, feedBack: feedback };
    return feedbackDAO.postFeedback(feedbackInfo)
};

/**
 * Add uploaded log file reference to mongodb
 * */
const addLogFileLocation = logFileDetails => feedbackDAO.logFileLocation(logFileDetails);

module.exports = {
    getFeedbacks,
    addFeedback,
    addLogFileLocation
};