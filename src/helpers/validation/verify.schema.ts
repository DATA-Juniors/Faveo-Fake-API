import Joi from "joi";

const VerifySchema = Joi.object({
    code: Joi.string()
        .min(3)
        .max(30)
        .required(),
    verificationId: Joi.string()
        .min(10)
})

export default VerifySchema;