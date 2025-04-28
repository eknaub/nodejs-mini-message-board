const expressAsyncHandler = require("express-async-handler");
const { getAllMessageDb, addNewMessageDb } = require("../models/messages");

const getAllMessages = expressAsyncHandler(async (req, res) => {
  const messages = await getAllMessageDb();
  res.json(messages);
});

const addNewMessage = expressAsyncHandler(async (req, res) => {
  const { user, text } = req.body;
  addNewMessageDb({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = {
  getAllMessages,
  addNewMessage,
};
