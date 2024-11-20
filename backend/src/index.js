require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const contactRouter = require('./routes/contact');
const OpenAIService = require('./routes/open-ai-service');
const ConversationService = require('./routes/conversation-service');
const UploadService = require('./routes/upload-service');

const app = express();
const port = 3000;

app.use(
  helmet({
    // Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
    crossOriginEmbedderPolicy: true, // = require-corp -> A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin. If a cross origin resource supports CORS, the crossorigin attribute or the Cross-Origin-Resource-Policy header must be used to load it without being blocked by COEP.
    crossOriginOpenerPolicy: { policy: 'same-origin' }, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
    // Cross-Origin-Resource-Policy: same-origin <- default
    // Origin-Agent-Cluster: <- default means The Origin-Agent-Cluster header provides a mechanism to allow web applications to isolate their origins from other processes.
    // Referrer-Policy: no-referrer <- default
    // Strict-Transport-Security: max-age=15552000; includeSubDomains <- default
    // X-Content-Type-Options: nosniff <- default
    xDnsPrefetchControl: { allow: true },
    // X-Download-Options: noopen <- default
    // X-Frame-Options: DENY <- default = The page cannot be displayed in a frame, regardless of the site attempting to do so. It's legacy because Content-Security-Policy: frame-ancestors 'none'; is the new standard
    // X-Permitted-Cross-Domain-Policies: none <- default
    // Default: the X-Powered-By header, if present, is removed.
    // X-XSS-Protection: 0 <- default - legacy
  })
);

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
app.use('/api/openai', OpenAIService);
app.use('/admin/conversation', ConversationService);
app.use('/upload/video', UploadService);

module.exports = app;
