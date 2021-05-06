import Joi from "joi";
import { v4 as uuidv4 } from "uuid";
import express from "express";
const route = express.Router();

const newId = uuidv4();

let books = [
  { id: 1, name: "book1" },
  { id: 2, name: "book2" },
  { id: 3, name: "book3" },
  { id: 4, name: "book4" },
];

// Event Listeners
// GET Method to get list of all books
route.get("/", (req, res) => {
  if (req.method === "GET" && books) {
    return res.send(books);
  } else {
    return res.status(404).send(`Collection Not Found`);
  }
});

// GET Method to get a particular book
route.get("/:id", (req, res) => {
  const reqid = parseInt(req.params.id);
  const book = books.find((x) => x.id === reqid);
  if (book) {
    return res.send(book);
  } else {
    return res.status(404).send(`The resource with id:${reqid} is not found`);
  }
});

// POST Method to create a book in books collection
route.post("/", (rq, rs) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
  });

  const { error } = schema.validate(rq.body);

  if (error) {
    rs.send(error.details[0].message);
  } else {
    const new_book = {
      id: books.length + 1,
      name: rq.body.name,
    };

    books.push(new_book);
    rs.send(books);
  }
});

export default route;
