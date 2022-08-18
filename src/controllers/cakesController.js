import { insertCake } from "../repositories/cakeRepository.js"

export async function createCakes(req, res) {
    const { name, image, price, description } = req.body
    try {
        if (await insertCake(name, image, price, description)) {
            return res.sendStatus(201);
        }

        res.status(409).send("Esse nome de bolo já existe");
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}