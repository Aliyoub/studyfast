import * as AWS from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fileName, fileType } = req.body;

    // Configurer le client S3 avec vos informations d'identification
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1', // ex: 'us-east-1'
    });

    const s3Params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: process.env.SECRET_FILE_NAME,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read',
    };

    try {
      const signedUrl = await s3.getSignedUrlPromise('putObject', s3Params);

      res.status(200).json({
        signedUrl,
        message: 'Signed URL generated successfully!',
      });
    } catch (error) {
      res.status(500).json({ error: 'Error generating signed URL' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
