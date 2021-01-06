const express = require("express");
const app = new express();

const navbar = [
    { link: "/books", name: "Books" },
    { link: "/authors", name: "Authors" },
    { link: "/addbooks", name: "Add Books" },
    { link: "/addauthors", name: "Add Author" },
];
const indexNav = [
    { link: "/", name: "Login" },
    { link: "/signup", name: "SignIn" },
];
const users = [
    { uname: "admin1", password: "1234" },
    { uname: "Sreejith", password: "12345" },
];

var bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

const booksRouter = require("./src/routes/booksRouter")(navbar);
const authorsRouter = require("./src/routes/authorsRouter")(navbar);
const addBookRouter = require("./src/routes/addBookRouter")(navbar);
const addauthRouter = require("./src/routes/addauthRouter")(navbar);
const homeRouter = require("./src/routes/homeRouter")(navbar);
const signupRouter = require("./src/routes/signupRouter")(indexNav);
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/addbooks", addBookRouter);
app.use("/addauthors", addauthRouter);
app.use("/home", homeRouter);
app.use("/signup", signupRouter);

app.get("/", (req, res) => {
    res.render("index", { indexNav, title: "Library App" });
});

app.post("/", function(req, res) {
    let isLoggedIn = false;
    var username = req.body.name;
    var passw = req.body.pass;
    for (i = 0; i < users.length; i++) {
        if (users[i].uname == username && users[i].password == passw) {
            isLoggedIn = true;
        }
    }
    if (isLoggedIn) {
        res.redirect("/home");
    } else {
        res.redirect("/");
    }
});
app.listen(5000);