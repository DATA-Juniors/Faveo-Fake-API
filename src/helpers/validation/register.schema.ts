import Joi from "joi";

const RegisterSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .min(8)
        .max(24)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    surname: Joi.string()
        .min(3)
        .max(30),
    birthday: Joi.string()
        .required(),
    phone: Joi.string()
        .required()
})

export default RegisterSchema;