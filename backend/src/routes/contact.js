const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  console.log('Kontaktformular empfangen:', req.body);
  res.status(200).send('Daten empfangen');
});

module.exports = router;
