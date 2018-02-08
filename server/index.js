const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express-session');

const port = 4000

const app = express();

app.use(bodyParser.json());








app.listen(port, () => console.log(`listening on port ${port}`));
