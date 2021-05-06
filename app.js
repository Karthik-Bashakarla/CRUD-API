// Imports
import routes from "./route.js";
import express from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use("/api/books", routes);

// PORT environment variable
const port = process.env.PORT || 5000;

// Event Emitters
app.listen(port, () => console.log(`Listening on http://localhost:${port} `));
