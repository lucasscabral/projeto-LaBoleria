import { insertCake, getFlavourById } from "../repositories/cakeRepository.js"

export async function createCakes(req, res) {
    const { name, image, price, description, flavourId } = req.body
    try {
        const flavour = await getFlavourById(flavourId);
        if (flavour.length === 0) {
            return res.status(404).send("Esse id de sabor não existe");
        }

        if (!await insertCake(name, image, price, description, flavourId)) {
            return res.status(409).send("Esse nome de bolo já existe");
        }

        return res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}