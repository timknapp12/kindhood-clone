require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const port = 4000

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
}) 

app.get('/api/locations', (req, res, next) => {
    const db = req.app.get('db');

    db.locations().then(locations => res.status(200).send(locations))
})

// Nodemailer
const transport = {
    host: 'smtp-mail.outlook.com',
    secure: false,
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
        rejectunauthorized: false
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('server is ready to take messages')
    }
})

app.get('/', function(req, res){
    res.render('form');// if jade
    // You should use one of line depending on type of frontend you are with
    res.sendFile(__dirname + '/form.html'); //if html file is root directory
//    res.sendFile("index.html"); //if html file is within public directory
  });

app.post('/send', (req, res, next) => {
    const email = req.body.email
    const content = `email: ${email}`
  
    const mail = {
      from: name,
      to: 'timknapp12@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

// app.post('/send', (req, res) => {
//     console.log(req.body);
// })

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}`));
