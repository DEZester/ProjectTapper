import express from 'express';
import dotenv from 'dotenv'
import {textWithColor} from "./helpers/helpers.js";

dotenv.config()

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(textWithColor(`Listening on ${PORT}`)))