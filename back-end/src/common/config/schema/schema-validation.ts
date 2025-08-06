import Joi, { ObjectSchema } from 'joi';

export const validationSchema: ObjectSchema = Joi.object({
  http: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    debug: Joi.boolean().required(),
    useJsonLogger: Joi.boolean().required(),
  }).required(),
  database: Joi.object({
    postgres: Joi.object({
      dialect: Joi.string().required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      database: Joi.string().required(),
    }).required(),
  }).required(),
  keycloak: Joi.object({
    dialect: Joi.string().required(),
    url: Joi.string().required(),
    realm: Joi.string().required(),
    clientId: Joi.string().required(),
    secret: Joi.string().required(),
    logLevels: Joi.string().required(),
    useNestLogger: Joi.boolean().required(),
    jwksRequestsPerMinute: Joi.number().required(),
    issuer: Joi.string().required(),
    jwksUri: Joi.string().required(),
  }).required(),
  keycloakDatabase: Joi.object({
    dialect: Joi.string().required(),
    host: Joi.string().required(),
    port: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
    realmId: Joi.string().required(),
  }).required(),
});
