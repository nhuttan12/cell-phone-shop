/**
 * @description Validation schema
 * @author Nhut Tan
 * @since 2025-08-07
 * @modifies 2025-09-25
 * @version 1.0.0
 */

import * as Joi from 'joi';
import { ObjectSchema } from 'joi';

export const validationSchema: ObjectSchema = Joi.object({
  HTTP_HOST: Joi.string().required(),
  HTTP_PORT: Joi.number().default(3000),
  HTTP_DEBUG: Joi.boolean().default(false),
  HTTP_USE_JSON_LOGGER: Joi.boolean().default(false),

  DB_MAIN_DIALECT: Joi.string().required(),
  DB_MAIN_HOST: Joi.string().required(),
  DB_MAIN_PORT: Joi.number().required(),
  DB_MAIN_USERNAME: Joi.string().required(),
  DB_MAIN_PASSWORD: Joi.string().required(),
  DB_MAIN_DATABASE: Joi.string().required(),

  DB_KEYCLOAK_DIALECT: Joi.string().required(),
  DB_KEYCLOAK_HOST: Joi.string().required(),
  DB_KEYCLOAK_PORT: Joi.number().required(),
  DB_KEYCLOAK_USERNAME: Joi.string().required(),
  DB_KEYCLOAK_PASSWORD: Joi.string().required(),
  DB_KEYCLOAK_DATABASE: Joi.string().required(),
  DB_KEYCLOAK_REALM_ID: Joi.string().required(),

  KEYCLOAK_URL: Joi.string().required(),
  KEYCLOAK_REALM: Joi.string().required(),
  KEYCLOAK_CLIENT_ID: Joi.string().required(),
  KEYCLOAK_SECRET: Joi.string().required(),
  KEYCLOAK_LOG_LEVELS: Joi.string().default('info'),
  KEYCLOAK_USE_NEST_LOGGER: Joi.boolean().default(true),
  KEYCLOAK_JWKS_REQUESTS_PER_MINUTE: Joi.number().default(10),
  KEYCLOAK_ISSUER: Joi.string().required(),
  KEYCLOAK_JWKS_URI: Joi.string().required(),
});
