// Imports
import { getBook, getBooks, createBook } from "./middleware/route.js";
import helmet from "helmet";
import express from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());

app.get("/api/books", getBooks);
app.get("/api/books/:id", getBook);
app.post("/api/books", createBook);

// PORT environment variable
const port = process.env.PORT || 5000;

// Event Emitters
app.listen(port, () => console.log(`Listening on http://localhost:${port} `));
