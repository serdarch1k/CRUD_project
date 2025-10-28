console.log("Web Serverni boshlash");
const express = require("express"); // External package/module
const app = express();

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code
app.use(express.static("public"));                                   // Middleware DP
app.use(express.json());  // json to object      // Rest API         // Middleware DP
app.use(express.urlencoded({ extended: true })); // Traditional API  // Middleware DP

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");
// ejs = backend da view (html frontend) ni yasash uchun

// 4: Routing code (endpoints)
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "Deleted all plans" });
        });
    }
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                res.render("reja", { items: data });
            }
        });
});

module.exports = app;


    // BACKEND SERVER FRAMEWORKS //

// NodeJS - Express | NestJS ..
// Python - Django | FastApi | Flusk
// PHP - CodeIgnitor | Laravel ..
// JAVA - Spring ..


// API Request (Types):      Traditional Api, Rest Api, GraphQL Api
// API Request (Structure):  Header & Body
// API Request (Methods):    GET & POST


// FRONTEND DEVELOPMENT: BSSR vs SPA