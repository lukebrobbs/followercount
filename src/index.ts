require('dotenv').config();
import express from 'express';
import { Routes } from './routes/index';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

Routes.create(app);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
