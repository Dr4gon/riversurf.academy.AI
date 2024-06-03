const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('video'), async (req, res) => {
  console.log(req.file);
  return res.status(200);
});

module.exports = router;
