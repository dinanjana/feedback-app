const Minio = require('minio');
const config = require('../../../../configs/index');

const minioClient = new Minio.Client({
    endPoint: config.MINIO_URL,
    port: config.MINIO_PORT,
    useSSL: true,
    accessKey: config.MINIO_ACCESS_KEY,
    secretKey: config.MINIO_SECRET
});

module.exports = {
    minioClient
};