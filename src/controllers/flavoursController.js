import { insertFlavours } from "../repositories/flavoursRepository.js";

export async function createFlavours(req, res) {
    const name = req.body.name;
    try {
        if (await insertFlavours(name)) {
            return res.sendStatus(201);
        }

        return res.status(409).send("Esse nome de bolo já existe");
    } catch (error) {
        res.sendStatus(500);
    }
}