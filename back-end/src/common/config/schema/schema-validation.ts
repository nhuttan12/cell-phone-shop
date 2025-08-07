import Joi, { ObjectSchema } from 'joi';

export const validationSchema: ObjectSchema = Joi.object({
  http: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    debug: Joi.boolean().required(),
    useJsonLogger: Joi.boolean().required(),
  }).required(),

  database: Joi.object({
    main: Joi.object({
      dialect: Joi.string().valid('postgres').required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      database: Joi.string().required(),
    }).required(),

    keycloak: Joi.object({
      dialect: Joi.string().valid('postgres').required(),
      host: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      database: Joi.string().required(),
      realmId: Joi.string().required(),
    }).required(),
  }).required(),

  keycloak: Joi.object({
    url: Joi.string().required(),
    realm: Joi.string().required(),
    clientId: Joi.string().required(),
    secret: Joi.string().required(),
    logLevels: Joi.string()
      .valid('verbose', 'debug', 'info', 'warn', 'error')
      .required(),
    useNestLogger: Joi.boolean().required(),
    jwksRequestsPerMinute: Joi.number().required(),
    issuer: Joi.string().required(),
    jwksUri: Joi.string().required(),
  }).required(),
});
