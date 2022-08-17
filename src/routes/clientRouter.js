import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { clientValidate } from "../schemas/schemas.js";
import { createClient } from "../controllers/clientController.js";

const clientRouter = Router();

clientRouter.post("/clients", validateSchema(clientValidate), createClient);
//clientRouters.get("/clients/:id/orders");

export default clientRouter;