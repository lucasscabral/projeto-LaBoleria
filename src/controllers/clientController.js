import { insertClient, getOrdersByClient, getClientId } from "../repositories/clientRepository.js";

export async function createClient(req, res) {
    const { name, address, phone } = req.body;
    try {
        await insertClient(name, address, phone);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function ordersByClient(req, res) {
    const { id } = req.params;
    try {
        const existeClientId = await getClientId(id);
        if (existeClientId.length === 0) {
            return res.status(404).send("Esse usuário não existe");
        }

        const ordersClient = await getOrdersByClient(id);
        res.send(ordersClient);
    } catch (error) {
        res.sendStatus(500);
    }
}