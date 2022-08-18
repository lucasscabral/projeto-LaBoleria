function validateSchema(schema) {
    return (req, res, next) => {
        const quantity = req.body;


        if (quantity.quantity !== undefined) {
            let body = { quantity: quantity.quantity }
            console.log(body)
            const { error } = schema.validate(body, { abortEarly: false });
            if (error) {
                res.status(400).send(error.details.map((e) => e.message).join(', '));
                return;
            }
            next();
            return;
        }

        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(400).send(error.details.map((e) => e.message).join(', '));
            return;
        }
        next();
    };
}

export default validateSchema;