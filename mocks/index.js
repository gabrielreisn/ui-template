/* eslint-disable @typescript-eslint/no-var-requires */
// took from https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/index.js

if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen()
} else {
  const { worker } = require('./browser')
  worker.start()
}