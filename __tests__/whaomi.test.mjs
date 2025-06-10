import request from 'supertest'
import { describe, expect, it } from 'vitest'

import { app } from '../src/express.mjs'

describe('/api/whoami', () => {
  it('Should return headers', async () => {
    const res = await request(app).get('/api/whoami').set(
      'x-forwarded-for', '111.222.123.234').set(
      'accept-language', 'en-US,en;q=0.9').set(
      'user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: '111.222.123.234',
      language: 'en-US,en;q=0.9',
      software: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    })
  })

  it('Should return empty headers errors', async () => {
    const res = await request(app).get('/api/whoami')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: 'Header missing',
      language: 'Header missing',
      software: 'Header missing'
    })
  })

  it('Shoud return empty headers error as software', async () => {
    const res = await request(app).get('/api/whoami').set(
      'x-forwarded-for', '111.222.123.234').set(
      'accept-language', 'en-US,en;q=0.9')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: '111.222.123.234',
      language: 'en-US,en;q=0.9',
      software: 'Header missing'
    })
  })

  it('Shoud return empty headers error as IP', async () => {
    const res = await request(app).get('/api/whoami').set(
      'accept-language', 'en-US,en;q=0.9').set(
      'user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: 'Header missing',
      language: 'en-US,en;q=0.9',
      software: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    })
  })

  it('Shoud return empty headers error as language', async () => {
    const res = await request(app).get('/api/whoami').set(
      'x-forwarded-for', '111.222.123.234').set(
      'user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: '111.222.123.234',
      language: 'Header missing',
      software: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    })
  })

  it('Shoud return empty headers error as software and IP', async () => {
    const res = await request(app).get('/api/whoami').set(
      'accept-language', 'en-US,en;q=0.9')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: 'Header missing',
      language: 'en-US,en;q=0.9',
      software: 'Header missing'
    })
  })

  it('Shoud return empty headers error as software and language', async () => {
    const res = await request(app).get('/api/whoami').set(
      'x-forwarded-for', '111.222.123.234')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: '111.222.123.234',
      language: 'Header missing',
      software: 'Header missing'
    })
  })

  it('Shoud return empty headers error as IP and language', async () => {
    const res = await request(app).get('/api/whoami').set(
      'user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3')

    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({
      ipaddress: 'Header missing',
      language: 'Header missing',
      software: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    })
  })
})
