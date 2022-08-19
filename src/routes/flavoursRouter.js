import { Router } from "express";
import { validateBodyFlavours } from "../middlewares/flavoursMiddlewares.js";
import { createFlavours } from "../controllers/flavoursController.js";

const flavoursRouter = Router();

flavoursRouter.post('/flavours', validateBodyFlavours, createFlavours);

export default flavoursRouter;