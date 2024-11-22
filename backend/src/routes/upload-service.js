const express = require('express');

const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

let s3 = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, Object.assign({}, req.body));
    },
    key: function (req, file, cb) {
      const { name, goal, email } = req.body;
      cb(null, Date.now().toString() + ' - ' + name + '.' + goal + '.' + email + '.' + file.originalname);
    },
  }),
});

const router = express.Router();

router.post('/', upload.single('video'), async (req, res) => {
  console.log(req.file);
  return res.status(200);
});

module.exports = router;
