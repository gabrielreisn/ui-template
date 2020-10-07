// took from https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/server.js

import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)