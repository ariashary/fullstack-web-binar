const express = require("express");
const app = express();
const port = 3005;

// Setup template engine with ejs
app.set("view engine", "ejs");

// Serve static file from folder assets
// and url /assets before find assets
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
    res.render("index"); // render template
});

app.get("/about", (req, res) => {
    res.render("about"); // render template
});

app.get("/contact", (req, res) => {
    res.render("contact"); // render template
});

app.get("/profile", (req, res) => {
    let list_hobby = ["Mancing", "Ngetik", "Menulis"];
    res.render("profile", {
        data: req.query,
        hobby: list_hobby
    }); // render template
});

// http://localhost:3005/article/?category=coding&title=hackaton-bsd
app.get("/:name/article", (req, res) => {
    let data = req.query;
    res.send(`Hello ${req.params.name}. Article with category ${data.category} and title ${data.title}`);
});

// http://localhost:3005/profile/coding/hackaton-bsd
app.get("/article/:category/:title", (req, res) => {
    let data = req.params;
    res.send(`Article with category ${data.category} and title ${data.title}`);
});

app.listen(port, () => console.log(`Running on port ${port}`));