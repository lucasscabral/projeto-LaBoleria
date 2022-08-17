import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./routes/index.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(routers);

const PORT = process.env.PORT;
server.listen(PORT, () => { console.log("servidor rodando") });