const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');

const port = 4000

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(
    session({
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: true
    })
)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/products', (req, res, next) => {
    const db = req.app.get('db');

    db.get_products().then(products => res.status(200)).send(products);
})




app.listen(port, () => console.log(`listening on port ${port}`));
