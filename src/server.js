import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import index from "./routes/index.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(json.express());
server.use(index);



const PORT = process.env.PORT;
server.listen(PORT, () => { console.log("servidor rodando") });