const express = require("express");
const env = require("dotenv").config();
const mongodb = require("./db/connect");

const app = express();

const port = process.env.PORT;

app.use("/", require("./routes"));

mongodb.initDb(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB");
        app.listen(port, () => {console.log(`Server is running on port ${port}`)});
    }
})


