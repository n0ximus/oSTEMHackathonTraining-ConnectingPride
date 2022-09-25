const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./src/auth");
const users = require("./src/users");
const posts = require("./src/posts");
const categories = require("./src/categories");

dotenv.config();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/auth", auth);
app.use("/posts", posts);
app.use("/categories", categories);
app.use("/users", users);

app.use("/", (req, res) =>
{
    console.log("this is the home")
})
app.listen("3001", () => {
    console.log("Backend is running.");
});