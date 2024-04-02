import Joi from "joi";

export const songCreationSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    artist: Joi.string()
        .min(3)
        .max(30)
        .required(),
    album: Joi.string()
        .min(3)
        .max(30)
        .required(),
    year: Joi.number().min(1600).max(new Date().getFullYear()),
    genre: Joi.array().items(Joi.string()),
    duration: Joi.string()
})

export const songUpdateSchema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string()
        .min(3)
        .max(30)
        .required(),
    artist: Joi.string()
        .min(3)
        .max(30)
        .required(),
    album: Joi.string()
        .min(3)
        .max(30)
        .required(),
    year: Joi.number().min(1600).max(new Date().getFullYear()),
    genre: Joi.array().items(Joi.string()),
    duration: Joi.string()
})