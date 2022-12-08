const { Router } = require('express');
const express = require('express');

const routes = express.Router();

routes.get('/', (req, resp) => {
    resp.render('index')
})




// exporting all the routes to the server
module.exports = routes ;