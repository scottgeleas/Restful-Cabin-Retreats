// imports
const path = require('path');
const express = require('express');

// initializing an express app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware to use so that http request will work smoothly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// defines the location of where to get static files
app.use(express.static(path.join(__dirname, 'public')));

// express app, use these route from my routes folder
// app.use(routes);

// start listening to http request
app.listen(PORT, () => console.log('Now listening'));