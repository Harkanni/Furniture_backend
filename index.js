import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
dotenv.config();
const PORT = 3000;

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
   




mongoose.set() 