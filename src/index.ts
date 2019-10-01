require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Routes } from './routes/index';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Routes.create(app);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
