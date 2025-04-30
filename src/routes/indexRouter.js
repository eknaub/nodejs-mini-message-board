const { Router } = require("express");
const { links } = require("../utils/links");
const { messages } = require("../db/models/messages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const search = req.query.search || "";

  const searchRegex = new RegExp(search, "i");
  const filteredMessages = messages.filter(
    (message) =>
      searchRegex.test(message.text) || searchRegex.test(message.user)
  );

  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: filteredMessages,
  });
});

module.exports = indexRouter;
