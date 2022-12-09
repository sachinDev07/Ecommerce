const { Router } = require('express');
const express = require('express');

const NavDetail = require('../models/NavDetail')

const routes = express.Router();

routes.get('/', async (req, resp) => {
    const navDetail = await NavDetail.findOne({'_id':'63937e8661d2e752ba892e2f'});

    resp.render('index',{
        navDetail:navDetail
    })
})

// routes.get('/shop', (req, resp) => {
//     resp.render('shop')
// })

// routes.get('/about', (req, resp) => {
//     resp.render('about')
// })

// routes.get('/blog', (req, resp) => {
//     resp.render('blog')
// })

// routes.get('/contact', (req, resp) => {
//     resp.render('contact')
// })

// routes.get('/cart', (req, resp) => {
//     resp.render('cart')
// })

// routes.get('/sproduct', (req, resp) => {
//     resp.render('sproduct')
// })



// exporting all the routes to the server
module.exports = routes ;