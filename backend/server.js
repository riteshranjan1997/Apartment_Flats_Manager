const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// initial data
const managerData = require("./manager.json");
const apartmentData = require("./apartment.json");
const flatData = require("./flat.json");

// schema of db
const Apartment = require("./models/apartmentDataModel");
const Manager = require("./models/managerModel");
const Flat = require("./models/flatsDataModel");

//  routes
const ApartmentRoute = require("./routes/apartmentRoutes");
const ManagerRoute = require("./routes/managerRoutes");

// express
const app = express();
dotenv.config();
app.use(express.json());

// connection to database
mongoose.connect(
  process.env.ATLAS_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connection to DB failed");
    } else {
      console.log("Database is successfully connected");
      Manager.find()
        .then((data) => {
          if (data.length === 0) {
            Manager.insertMany(managerData)
              .then(() =>
                console.log("Initial Data of manager is Added to the database")
              )
              .catch((err) => console.log("Error: " + err));
          } else {
            console.log("initial data is allready present");
          }
        })
        .catch((err) => console.log("Error: " + err));
      Apartment.find().then((data) => {
        if (data.length === 0) {
          Apartment.insertMany(apartmentData)
            .then(() =>
              console.log("Initial Data of apartment is Added to the database")
            )
            .catch((err) => console.log("Error: " + err));
        } else {
          console.log("initial data is allready present");
        }
      });
      Flat.find().then((data) => {
        if (data.length === 0) {
          Flat.insertMany(flatData)
            .then(() =>
              console.log("Initial Data of flat is Added to the database")
            )
            .catch((err) => console.log("Error: " + err));
        } else {
          console.log("initial data is allready present");
        }
      });
    }
  }
);

//parent route
app.use("/apartment", ApartmentRoute);
app.use("/manager", ManagerRoute);

app.listen(5000, () => {
  console.log("The server is up and running at port 5000");
});
