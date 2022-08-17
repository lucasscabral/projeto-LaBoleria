import { Router } from "express";
import { cakeValidate } from "../schemas/schemas.js"
import validateSchema from "../middlewares/validateSchema.js";
import { createCakes } from "../controllers/cakesController.js";

const cakesRouter = Router();

cakesRouter.post('/cakes', validateSchema(cakeValidate), createCakes);

export default cakesRouter;