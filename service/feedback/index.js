const feedbackDAO = require('../../repository/feedback');

const getFeedbacks = () => feedbackDAO.getFeedbacks();

const addFeedback = ({name, stars, feedback}) => {
    const feedbackInfo = { name, stars, feedBack: feedback };
    return feedbackDAO.postFeedback(feedbackInfo)
};

const addLogFileLocation = logFileDetails => feedbackDAO.logFileLocation(logFileDetails);

module.exports = {
    getFeedbacks,
    addFeedback,
    addLogFileLocation
};