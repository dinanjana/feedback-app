const ObjectId = require("mongodb").ObjectID;
const client = require('../connectors/mongodb/index').client;
const configs = require('../../../configs/index');

const getFeedbacks = () => client.conn.db(configs.FEEDBACK_DB).collection(configs.FEEDBACK_COLLECTION).find().toArray();

const postFeedback = (feedbackInfo) => client.conn.db(configs.FEEDBACK_DB).collection(configs.FEEDBACK_COLLECTION).insertOne({ _id: ObjectId(Date.now()), ...feedbackInfo });

const logFileLocation = logFileInfo => client.conn.db(configs.FEEDBACK_DB).collection(configs.LOGS_COLLECTION).insertOne({ _id: ObjectId(Date.now()), ...logFileInfo });

module.exports = {
    getFeedbacks,
    postFeedback,
    logFileLocation
};