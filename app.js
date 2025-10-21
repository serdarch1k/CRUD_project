console.log("Web Serverni boshlash");
const express = require("express"); // External package/module
const app = express();

// MongoDB chaqirish
const db = require("./server").db();

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
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("reja");
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