import { flavoursValidate } from "../schemas/schemas.js"


export async function validateBodyFlavours(req, res, next) {
    const validated = flavoursValidate.validate(req.body)
    if (validated.error) {
        res.status(400).send(validated.error.details.map((e) => e.message).join(', '));
        return;
    }
    next();
}