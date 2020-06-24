const { MongoClient } = require('mongodb');
const logger = require('../../../service/log/index').logger;
const uri = require('../../../../configs/index').MONGODB_URI_FEEDBACK;

const client = {};

const init = async () => {
    client.conn = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        logger.info('Connecting to mongo db');
        await client.conn.connect();
    } catch (e) {
        logger.error(e);
    }
};

module.exports = {
    client,
    init
};