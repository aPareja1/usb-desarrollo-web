import Joi from "joi";

export const songSchema = Joi.object({
    title: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    artist: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    album: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.number().required()
});