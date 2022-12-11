const { Router, response } = require("express");
const express = require("express");

const NavDetail = require("../models/home/NavDetail");
const Hero = require("../models/home/Hero");
const Feature = require("../models/home/Feature");
const Product = require("../models/home/Product");
const Banner = require("../models/home/Banner");
const NewProducts = require("../models/home/NewProducts");
const CallToAction = require("../models/home/CallToAction");
const Banner3 = require("../models/home/Banner3");
const NewsLetter = require("../models/home/NewsLetter");
const ContactForm = require("../models/Contact/ContactForm");

const routes = express.Router();

routes.get("/", async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  const hero = await Hero.find();

  const features = await Feature.find();

  const products = await Product.find();

  const banner = await Banner.find();

  const newProducts = await NewProducts.find();

  const callToAction = await CallToAction.find();

  const banner3 = await Banner3.find();


  resp.render("index", {
    navDetail: navDetail,

    hero:hero,

    features:features,

    products:products,

    banner:banner,

    newProducts:newProducts,

    callToAction:callToAction,

    banner3:banner3,


  });
});


// process newsletter form
routes.post('/process-newsLetter-form', async (req,resp)=> {
  console.log("form is submitted");
  console.log(req.body);

  // save the data to database
  try{

    const data = await NewsLetter.create(req.body);
    console.log(data);
    resp.redirect('/');

  }
  catch(err){
    console.log(e);
    resp.redirect('/');
  }
});

routes.get('/shop', async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  resp.render("shop", {
    navDetail: navDetail,

  });
})

routes.get('/about',async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  resp.render("about", {
    navDetail: navDetail,

  });

    
})

routes.get('/blog', async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  resp.render("blog", {
    navDetail: navDetail,

  });

})

routes.get('/contact',async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  resp.render("contact", {
    navDetail: navDetail,

  });
})


// process-contact-form

routes.post('/process-contact-form', async (request,response) => {
  console.log("form is submitted");
  console.log(request.body);

  // save the data to the database...
  try{
    let data = await ContactForm.create(request.body);
    console.log(data);
    resp.redirect('/');
  }
  catch(e){
    console.log(e);
    response.redirect('/');
  }
});



routes.get('/cart', async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });

  resp.render("cart", {
    navDetail: navDetail,

  });
})

routes.get('/sproduct', async (req, resp) => {
  const navDetail = await NavDetail.findOne({
    _id: "63937e8661d2e752ba892e2f",
  });
    
  resp.render("sproduct", {
    navDetail: navDetail,

  });
})

// exporting all the routes to the server
module.exports = routes;

