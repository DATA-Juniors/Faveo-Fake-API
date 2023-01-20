import Joi from "joi";

const InfoSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required(),
    geo: Joi.string()
        .min(3)
        .required(),
    address: Joi.string()
       .min(3)
       .required(),
    phone: Joi.string()
       .min(3)
       .required(),
})

export default InfoSchema;