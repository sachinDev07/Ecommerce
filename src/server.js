const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");

const NavDetail = require("./models/NavDetail");

const routes = require("./routes/main");

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
    //   NavDetail.create({
    //     brandIcon: "/static/images/logo.png",
    //     cartIcon: "fa-solid fa-bag-shopping",
    //     cartUrl: "/cart",
    //     links: [
    //       {
    //         label: "Home",
    //         url: "/",
    //       },
    //       {
    //         label: "Shop",
    //         url: "/shop",
    //       },
    //       {
    //         label: "About",
    //         url: "/about",
    //       },
    //       {
    //         label: "Blog",
    //         url: "/blog",
    //       },
    //       {
    //         label: "Contact",
    //         url: "/contact",
    //       },
    //     ],
        
    //   });

      console.log("Database connected");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
