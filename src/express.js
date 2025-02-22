const express = require('express');
const cors = require('cors');
const path = require('path');

const mainView = require('./index');
const hello = require('./api/hello/index');
const whoami = require('./api/whoami/index');
const docs = require('./api/docs/index');

const app = express();

//Middleware declaration

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, _, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

//Routes declaration

// /
app.use(mainView);

// /api/hello 
app.use(hello);

// /api/docs
app.use(docs);

// /api/whoami
app.use(whoami);


module.exports = app;