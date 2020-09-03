import app from '../'
import request from 'supertest'

describe('Hello world endpoint', () => {
  it('should get a Hello World', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('Hello')
  })
})
