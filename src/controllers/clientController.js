import { insertClient } from "../repositories/clientRepository.js";

export async function createClient(req, res) {
    const { name, address, phone } = req.body;
    try {
        await insertClient(name, address, phone);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }

}

// export async function ordersByClients(req, res) {
//     const { name, address, phone } = req.body;
//     try {
//         await insertClient(name, address, phone);
//         res.sendStatus(201);
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500);
//     }

// }