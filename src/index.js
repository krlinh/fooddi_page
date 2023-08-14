const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3500;
const {engine} = require('express-handlebars');
const path = require('node:path');
const route = require ('./routes');
const dbconnect = require('./config/db');


app.use(morgan('combined'));
// connect to db
dbconnect.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Route init
route(app)
app.listen(port, () => {
  console.log(`Fooddi_page listening on port http://localhost:${port}`)
})