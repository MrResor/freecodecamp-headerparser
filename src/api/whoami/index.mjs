import express from 'express'

const whoami = express.Router()

whoami.get('/api/whoami', (req, res) => {
  /* 'x-forwarded-for' key is used since my solution uses reverse proxy to run on my machine,
        if such solution is not used by you, change it to 'host' instead
    */
  const ipaddress = req.headers['x-forwarded-for'] || 'Header missing' // replace with req.headers['host']
  const language = req.headers['accept-language'] || 'Header missing'
  const software = req.headers['user-agent'] || 'Header missing'

  res.status(200).json({
    ipaddress,
    language,
    software
  })
})

export { whoami }
