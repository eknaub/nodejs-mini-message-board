const { Router } = require("express");
const { links } = require("../utils/links");
const { getAllMessageDb } = require("../db/models/messages");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const search = req.query.search || "";
  const messages = await getAllMessageDb();

  const searchRegex = new RegExp(search, "i");
  const filteredMessages = messages.filter(
    (message) =>
      searchRegex.test(message.text) || searchRegex.test(message.author)
  );

  res.render("index", {
    title: "Mini Messageboard",
    links: links,
    messages: filteredMessages,
  });
});

module.exports = indexRouter;
