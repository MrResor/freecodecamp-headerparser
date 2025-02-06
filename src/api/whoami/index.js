const router = require('express').Router();

router.get('/api/:date', (req, res) => {
    res.json({
        "ipaddress": req.headers['x-forwarded-for'],
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
      });
});

module.exports = router;