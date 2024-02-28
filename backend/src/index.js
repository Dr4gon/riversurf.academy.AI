require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const contactRouter = require('./routes/contact');
const openAiRequest = require('./routes/apiRequest');
const databaseConection = require('./routes/databaseConection');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB}`);
    app.listen(3000, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();

app.use('/contact', contactRouter);
app.use('/api/request', openAiRequest);
app.use('/admin/conversation', databaseConection);
