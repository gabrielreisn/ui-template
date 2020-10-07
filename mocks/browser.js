// took from https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/browser.js

import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)