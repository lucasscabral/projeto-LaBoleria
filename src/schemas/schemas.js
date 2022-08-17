import joi from "joi"

const cakeValidate = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().min(1).required(),
    image: joi.string().uri().required(),
    description: joi.string()
})

const clientValidate = joi.object({
    name: joi.string().min(2).required(),
    address: joi.string().required(),
    phone: joi.string().min(10).max(11).required()
})

const orderValidate = joi.object({
    quantity: joi.number().min(0).max(5).required()
})

export default { cakeValidate, clientValidate, orderValidate };