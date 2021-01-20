const express = require("express");
const authorsRouter = express.Router();

function router(navbar) {
    var authors = [{
            name: "Joseph Barbera",
            genre: "Cartoon",
            about: "was an American animator, director, producer, storyboard artist, and cartoon artist",
            books: ["first", "second"],
            details: "J.K. Rowling, in full Joanne Kathleen Rowling, (born July 31, 1965, Yate, near Bristol, England), British author, creator of the popular and critically acclaimed Harry Potter series, about a young sorcerer in training.",
            img: "/img/JBarbera.jpg"
        },
        {
            name: "J K Rowling",
            about: "Joanne Kathleen Rowling, (born July 31, 1965, Yate, near Bristol, England), British author",
            genre: "Cartoon",
            books: ["first", "second"],
            details: "Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.",
            img: "/img/JK.jpg"
        },
        {
            name: "Basher",
            about: "Vaikom Muhammad Basheer, also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature",
            books: ["first", "second"],
            genre: "Drama",
            details: "In the Malayalam Literary arena, the legend Vaikom Muhammad Basheer owns a remarkable position. With his profound and simple writing, touch of satire, sarcasm and black humour, Basheer had woven a style of his own and marked his presence as a short story writer, novelist, humanist and also as a freedom fighter.",

            img: "/img/basheer.jpg"
        }
    ];
    authorsRouter.get('/', (req, res) => {
        res.render('authors', { title: 'Library App', navbar, heading: 'Library', authors })
    });
    authorsRouter.get('/:id', (req, res) => {
        const id = req.params.id
        res.render('author', { title: 'Library App', navbar, heading: 'Library', author: authors[id] })
    });
    return authorsRouter;
}
module.exports = router;