import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientRouter.js"
import ordersRouters from "./ordersRouter.js";
import flavoursRouter from "./flavoursRouter.js";

const routers = Router();

routers.use(cakesRouter);
routers.use(clientRouter);
routers.use(ordersRouters);
routers.use(flavoursRouter);

export default routers;