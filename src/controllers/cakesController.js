import { insertCake } from "../repositories/cakeRepository.js"

export async function createCakes(req, res) {
    const { name, image, price, description } = req.body
    try {
        await insertCake(name, image, price, description);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}