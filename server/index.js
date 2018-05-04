require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const exphbs = require('express-handlebars');
const cred = require('../config/config');
const path = require("path");

const port = 8030

const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(
    session({
    secret: 'jdjdjdkksjkfjfkdkskakd',
    resave: false,
    saveUnitialized: true
    })
)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/products', (req, res, next) => {
    const db = req.app.get('db');

    db.get_products()
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send());
})

app.get('/api/products/:id', (req, res, next) => {
    const db = req.app.get('db');

    db.get_product([req.params.id])
    .then(product => res.status(200).send(product))
    .catch(() => res.status(500).send());
}) 

app.get('/api/locations', (req, res, next) => {
    const db = req.app.get('db');

    db.locations().then(locations => res.status(200).send(locations))
    .catch(() => res.status(500).send());
})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}`));
