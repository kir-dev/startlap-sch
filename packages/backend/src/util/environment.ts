import * as env from 'env-var'

export const BACKEND_PORT = env.get('BACKEND_PORT').default(3300).asInt()
