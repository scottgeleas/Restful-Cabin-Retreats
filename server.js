// imports
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

// initializing an express app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware to use so that http request will work smoothly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define handlebar
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'base',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname, '/views/partials/'),
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// defines the location of where to get static files
app.use(express.static(path.join(__dirname, 'public')));

// express app, use these route from my routes folder
app.use(routes);

// start listening to http request
app.listen(PORT, () => console.log('Now listening'));
