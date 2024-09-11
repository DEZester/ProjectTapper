import express from 'express';
import dotenv from 'dotenv'
import {textWithColor} from "./helpers/helpers.js";
import mongoose from "mongoose";

dotenv.config()

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(8080, () => console.log(textWithColor(`Listening on ${PORT}`))))
  .catch((err) => console.error(textWithColor(`Error connecting to MongoDB: ${err}`)))

