// import the required modules
import express from "express";
import morgan from "morgan";

//initialise the express app
const app = express();

// Retrieve the port from the environment variable
const PORT = process.env.port || 5003;

// initialising middleware
// morgan is used to logg http requests to the console in an easy to read format
app.use(morgan("dev"));

// express.json() middleware is used to parse the incoming JSON requests
app.use(express.json());
app.use(express.static("public"));

export default app;
