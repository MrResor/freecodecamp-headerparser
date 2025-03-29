import express from 'express';

const whoami = express.Router();

whoami.get('/api/:date', (req, res) => {
    /* 'x-forwarded-for' key is used since my solution uses reverse proxy to run on my machine, 
        if such solution is not used by you, change it to 'host' instead 
    */
    res.json({
        "ipaddress": req.headers['x-forwarded-for'], // replace with req.headers['host']
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
    });
});

export { whoami };