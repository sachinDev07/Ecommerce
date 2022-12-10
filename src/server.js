const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");

const NavDetail = require("./models/home/NavDetail");
const Hero = require('./models/home/Hero');
const Feature = require('./models/home/Feature');

const routes = require("./routes/main");
const hero = require("./models/home/Hero");

const app = express();
const PORT = process.env.PORT || 5300;

// for accessing static files
app.use("/static", express.static("public"));
app.use("", routes);

mongoose.set("strictQuery", true);

// (template engine)
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials"); // setting partials

// database connection
mongoose.connect(
  "mongodb://0.0.0.0:27017/shopping-ecom-website",
  async (err) => {
    if (err) {
      console.log("Unable to connect with the database");
    } else {
        // NavDetail.create({
        //   brandIcon: "/static/images/logo.png",
        //   cartIcon: "fa-solid fa-bag-shopping",
        //   cartUrl: "/cart",
        //   links: [
        //     {
        //       label: "Home",
        //       url: "/",
        //     },
        //     {
        //       label: "Shop",
        //       url: "/shop",
        //     },
        //     {
        //       label: "About",
        //       url: "/about",
        //     },
        //     {
        //       label: "Blog",
        //       url: "/blog",
        //     },
        //     {
        //       label: "Contact",
        //       url: "/contact",
        //     },
        //   ],

        // });



      // hero section
      
      // hero.create({
      //   bgImage:"/static/images/hero4.png",
      //   link:"/cart",
      //   titleOne:"Super value deals",
      //   titleTwo:"On all products",
      //   subTitle:"Trade-in-offer",
      //   paragraph:"Save more with coupons & up to 70% off!",
      // })


      // Feature.create([
      //   {
      //     iconUrl:"/static/images/features/f1.png",
      //     title:"Free Shipping",
      //   },
      //   {
      //     iconUrl:"/static/images/features/f4.png",
      //     title:"Save Money",
      //  },
      //   {
      //     iconUrl:"/static/images/features/f2.png",
      //     title:"Online Order",
      //   },
      //   {
      //     iconUrl:"/static/images/features/f3.png",
      //     title:"Promotions",
      //   },
      //   
      //   {
      //     iconUrl:"/static/images/features/f5.png",
      //     title:"Happy Sell",
      //   },
      //   {
      //     iconUrl:"/static/images/features/f6.png",
      //     title:"24/7 Support",
      //   },
      // ]);


      console.log("Database connected");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
