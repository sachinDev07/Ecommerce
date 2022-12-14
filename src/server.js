const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hbs = require('hbs');

const NavDetail = require('./models/home/NavDetail');
const hero = require('./models/home/Hero');
const Feature = require('./models/home/Feature');
const Product = require('./models/home/Product');
const Banner = require('./models/home/Banner');
const NewProducts = require('./models/home/NewProducts');
const CallToAction = require('./models/home/CallToAction');
const Banner3 = require('./models/home/Banner3');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/main');

const PORT = process.env.PORT || 5300;

// for accessing static files
app.use('/static', express.static('public'));
app.use(routes);

mongoose.set('strictQuery', true);

// (template engine)
app.set('view engine', 'hbs');
hbs.registerPartials('views/partials'); // setting partials

// database connection
mongoose.connect(
    'mongodb://0.0.0.0:27017/shopping-ecom-website',
    async (err) => {
        if (err) {
            console.log('Unable to connect with the database');
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

            // Product.create({
            //   title: "Feature Products",
            //   subtitle: "Summer Collection New Design",
            //   details: [
            //     {
            //       clotheImage: "/static/images/products/f1.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f2.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f3.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f4.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f5.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f6.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f7.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //     {
            //       clotheImage: "/static/images/products/f8.jpg",
            //       brandName: "adidas",
            //       description: "Cartoon Astronaut T-Shirts",
            //       price: 78,
            //     },
            //   ],
            // });

            // Banner.create({
            //   bgImage:"/static/images/banner/b2.jpg",
            //   title:"Up to 70% Off - All t-Shirts & Accessories",
            //   subTitle:"Repair Services",
            //   url:"/shop",
            // })

            // NewProducts.create({
            //     title: "New Arrivals",
            //     subtitle: "Summer Collection New Design",
            //     details: [
            //       {
            //         clothImage: "/static/images/products/n1.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n2.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n3.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n4.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n5.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n6.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n7.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //       {
            //         clothImage: "/static/images/products/n8.jpg",
            //         brandName: "adidas",
            //         description: "Cartoon Astronaut T-Shirts",
            //         price: 78,
            //       },
            //     ],
            //   });

            // CallToAction.create(
            // [
            //     {
            //       bgImage:"/static/images/banner/b17.jpg",
            //       title:"crazy deals",
            //       subTitle:"buy 1 get 1 free",
            //       description:"The best classic dress is on sale at coro",
            //       url:"/shop"
            //     },
            //     {
            //       bgImage:"/static/images/banner/b10.jpg",
            //       title:"spring/summer",
            //       subTitle:"upcoming season",
            //       description:"The best classic dress is on sale at coro",
            //       url:"/shop"
            //     },
            //   ]
            // );

            // Banner3.create([
            //   {
            //     bgImage:"/static/images/banner/b7.jpg",
            //     title:"SEASON SALE",
            //     description:"Winter Collection -50% OFF",
            //   },
            //   {
            //     bgImage:"/static/images/banner/b4.jpg",
            //     title:"NEW FOOTWEAR COLLECTION",
            //     description:"Spring/Summer 2022",
            //   },
            //   {
            //     bgImage:"/static/images/banner/b18.jpg",
            //     title:"T-SHIRTS",
            //     description:"Winter Collection -50% OFF",
            //   },
            // ]);

            console.log('Database connected');
        }
    }
);

app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
});
