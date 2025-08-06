import Joi, { ObjectSchema } from 'joi';

export const validationSchema: ObjectSchema = Joi.object({
  http: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    debug: Joi.boolean().required(),
    useJsonLogger: Joi.boolean().required(),
  }).required(),
  db: Joi.object({
    postgres: Joi.object({
      url: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      database: Joi.string().required(),
    }).required(),
  }).required(),
  keycloak: Joi.object({
    url: Joi.string().required(),
    realm: Joi.string().required(),
    clientId: Joi.string().required(),
    secret: Joi.string().required(),
    logLevels: Joi.string().required(),
    useNestLogger: Joi.boolean().required(),
  }).required(),
});
