import { Router } from "express";
import cakesRouter from "./cakesRouter.js";

const routers = Router();

routers.use(cakesRouter)

export default routers;