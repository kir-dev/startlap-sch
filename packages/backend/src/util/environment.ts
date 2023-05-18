import { config } from 'dotenv';
import { from } from 'env-var';
const env = from(process.env, {});
config();

export const BACKEND_PORT = env.get('BACKEND_PORT').default(3000).asPortNumber();
export const NODE_ENV = env.get('NODE_ENV').default('development').asString();
export const JWT_ACCESSTOKEN_SECRET = env.get('JWT_ACCESSTOKEN_SECRET').required().asString();
export const JWT_ACCESSTOKEN_EXPIRES_IN = env
  .get('JWT_ACCESSTOKEN_EXPIRES_IN')
  .required()
  .asString();
export const AUTHSCH_CLIENT_ID = env.get('AUTHSCH_CLIENT_ID').required().asString();
export const AUTHSCH_CLIENT_SECRET = env.get('AUTHSCH_CLIENT_SECRET').required().asString();
export const FRONTEND_HOST = env.get('FRONTEND_HOST').required().asString();
export const FRONTEND_AUTHORIZED_URL = env.get('FRONTEND_AUTHORIZED_URL').required().asString();
