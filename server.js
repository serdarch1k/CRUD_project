const http = require("http"); // Core package/module
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://serdarchik:Sardorbek3434@cluster0.jjjllms.mongodb.net/Reja";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, data) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = data;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);