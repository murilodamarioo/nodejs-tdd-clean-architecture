const request = require('supertest')
const app = require('../config/app')

describe('Cors Middleware', () => {
  test('Should enable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_x_powered_by')
    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-methods']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
  })
})
