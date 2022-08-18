import { checkCustomerExistence, checksExistenceOfCake, insertOrders, getOrders, getOrdersByDate, getOrdersById }
from "../repositories/orderRepository.js";

export async function createOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;
    try {
        if (await checkCustomerExistence(clientId)) {
            return res.status(404).send("Esse usuário não existe")
        }
        if (await checksExistenceOfCake(cakeId)) {
            return res.status(404).send("Esse Bolo não existe")
        }

        await insertOrders(clientId, cakeId, quantity, totalPrice);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function listOrders(req, res) {
    const dateOrders = req.query;
    try {
        if (dateOrders !== undefined) {
            const ordersByDate = await getOrdersByDate(dateOrders);
            res.status(200).send(ordersByDate);
        }
        const allOrders = await getOrders();

        res.status(200).send(allOrders);
    } catch (error) {

    }
}

export async function listOrderById(req, res) {
    const { id } = req.params;
    try {
        const ordersById = await getOrdersById(id);

        if (ordersById.length === 0) {
            return res.status(404).send("Não existe nenhum pedido com esse id");
        }

        res.status(200).send(ordersById);

    } catch (error) {

    }
}