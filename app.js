const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");
const app = new express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log(con.connections);
    console.log('DB connected sucessfully');
});



// const testBook = new Book({
//     title: "Tom And Jerry",
//     description: "an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.",
//     longDescription: "Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry.",
//     genre: "Cartoon",
//     authorName: "Joseph Barbera",
//     authorDescription: "was an American animator, director, producer, storyboard artist, and cartoon artist",
//     authorLoDescription: "J.K. Rowling, in full Joanne Kathleen Rowling, (born July 31, 1965, Yate, near Bristol, England), British author, creator of the popular and critically acclaimed Harry Potter series, about a young sorcerer in training.",
//     authorBooks: "The Flintstones 1"
// });

// testBook.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log('error: ', err)
// });

const navbar = [
    { link: "/books", name: "Books" },
    { link: "/authors", name: "Authors" },
    { link: "/addbooks", name: "Add Books" },
    // { link: "/addauthors", name: "Add Author" },
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

app.post("/addbooks", async function(req, res) {
    const title = req.body.title;
    const genre = req.body.genre;
    const description = req.body.description;
    const longDescription = req.body.longDescription;
    const authorName = req.body.authorName;
    const authorDescription = req.body.authorDescription;
    const authorLoDescription = req.body.authorLoDescription;
    const authorBooks = req.body.authorBooks;

    const sampleBook = {
        title,
        description,
        longDescription,
        genre,
        authorName,
        authorDescription,
        authorLoDescription,
        authorBooks
    };

    // const testBook = new Book({
    //     title,
    //     description,
    //     longDescription,
    //     genre,
    //     authorName,
    //     authorDescription,
    //     authorLoDescription,
    //     authorBooks
    // });

    // testBook.save().then(doc => {
    //     // console.log(doc);
    // }).catch(err => {
    //     // console.log('error: ', err)
    // });

    const testBook = await Book.create(sampleBook)

    // console.log(testBook);

    res.redirect('/books');

});

// FIND ALL BOOKS FROM DB

// app.get("/books", async function(req, res) {
//     const allBooks = await Book.find();
//     console.log(allBooks);
// });

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
});