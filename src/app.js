const express = require("express");
const path = require("node:path");
const messageRouter = require("./routes/messageRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes
app.use("/message", messageRouter);
app.use("/", indexRouter);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

// Set views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
