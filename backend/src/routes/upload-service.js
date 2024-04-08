const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Uploading video...');
  return res.status(200);
});

module.exports = router;
