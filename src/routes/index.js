import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientRouter.js"

const routers = Router();

routers.use(cakesRouter);
routers.use(clientRouter);

export default routers;