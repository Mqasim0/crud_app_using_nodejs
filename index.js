import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import route from './routes/routes.js';

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);

const PORT = 8000;
const URL = 'url';

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected Successfully');
  })
  .catch((error) => {
    console.log('Error', error);
  });

app.listen(PORT, () => {
  console.log(`server runnig on PORT ${PORT}`);
});
