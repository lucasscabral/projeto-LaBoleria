import { checkCustomerExistence, checksExistenceOfCake, insertOrders } from "../repositories/orderRepository.js";

export async function createOrder(req, res) {
    const { clientId, cakeId, quantity, createdAt } = req.body;
    try {
        if (await checkCustomerExistence(clientId)) {
            return res.status(404).send("Esse usuário não existe")
        }
        if (await checksExistenceOfCake(cakeId)) {
            return res.status(404).send("Esse Bolo não existe")
        }
        console.log(clientId)
        console.log(cakeId)
        await insertOrders(clientId, cakeId, quantity, createdAt);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }

}