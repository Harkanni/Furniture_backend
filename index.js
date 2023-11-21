import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/route.js';
import cors from 'cors'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));



app.use('/api/v1/products', router)

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`)))
    .catch((error) => console.log(error.message))



mongoose.set() 