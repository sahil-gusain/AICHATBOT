import express from "express"
import  dotenv from "dotenv";

dotenv.config();

const app= express();
const portno = process.env.PORT_NO;

app.use(express.json());

export default app;