const { Router } = require("express");
const { links } = require("../utils/links");
const { messages } = require("../db/models/messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: messages,
  });
});

module.exports = indexRouter;
