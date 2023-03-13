const express = require('express');
const app = express();
const colors = require('colors')
const dotenv = require('dotenv');
const cors = require('cors');
app.use(express.json());
app.use(cors())
dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

const appointmentRouter = require('./routes/appointment');

app.use('/', appointmentRouter);

const PORT = process.env.PORT;
// const server = app.listen(PORT, () => console.log('Server running'.blue.bold));
app.listen(PORT);
