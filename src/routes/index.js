import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientRouter.js"
import ordersRouters from "./ordersRouter.js";

const routers = Router();

routers.use(cakesRouter);
routers.use(clientRouter);
routers.use(ordersRouters);

export default routers;