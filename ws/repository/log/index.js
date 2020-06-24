const minioClient = require('../connectors/minio/index').minioClient;

const uploadLogFiles = async (fileLocation, name) => {
    const metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
    };

    try {
        await minioClient.makeBucket('logs', 'us-east-1');
    } catch (e) {
        if (e.code !== 'BucketAlreadyOwnedByYou') {
            return e;
        }
    }
    try {
        return await minioClient.fPutObject('logs', name, fileLocation, metaData);
    } catch (e) {
        throw e;
    }
};

module.exports = {
    uploadLogFiles
};