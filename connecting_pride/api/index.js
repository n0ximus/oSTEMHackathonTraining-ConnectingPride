const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.use("/", (req, res) =>
{
    console.log("this is the home")
})
app.listen("5000", () => {
    console.log("Backend is running.");
});