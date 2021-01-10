import { rest } from 'msw'

export const handlers = [
  rest.post('/endpoint_1', (req, res, ctx) => {

    return res(
      ctx.delay(300),
      ctx.json({ message : `something went wrong`})
    )

  }),
  rest.get('/endpoint_2', (req, res, ctx) => {
   
    return res(
      ctx.delay(1500),
      ctx.status(404,'data not found')
    )
  }),
  rest.post('/endpoint_3', (req, res, ctx) => {
   
    return res(
      ctx.delay(1500),
      ctx.status(500, 'could not attribute a score to the user'),
    )
  }),
]