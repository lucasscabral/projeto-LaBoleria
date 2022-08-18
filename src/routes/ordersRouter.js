import { Router } from "express";
import { createOrder, listOrders, listOrderById } from "../controllers/ordersController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { orderValidate } from "../schemas/schemas.js";

const ordersRouters = Router();

ordersRouters.post("/orders", validateSchema(orderValidate), createOrder);
ordersRouters.get("/orders?", listOrders);
ordersRouters.get("/orders/:id", listOrderById);

export default ordersRouters;