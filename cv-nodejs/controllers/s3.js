const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const uploadFileToS3 = async ( filePath, fileBuffer) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: `${filePath}`,
    Body: fileBuffer,    
    ACL: 'public-read', // Esto hace que el archivo sea público
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location; // La URL pública del archivo subido
  } catch (error) {
    console.error('Error al subir el archivo a S3:', error);
    throw error;
  }
};

module.exports = {
    uploadFileToS3
}