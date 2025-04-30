const expressAsyncHandler = require("express-async-handler");
const { getAllMessageDb, addNewMessageDb } = require("../models/messages");
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("user").notEmpty().withMessage("User is required"),
  body("text").notEmpty().withMessage("Text is required"),
];

const getAllMessages = expressAsyncHandler(async (req, res) => {
  const messages = await getAllMessageDb();
  res.json(messages);
});

const addNewMessage = expressAsyncHandler(async (req, res) => {
  const { user, text } = req.body;

  // Validate the request body using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  addNewMessageDb({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = {
  getAllMessages,
  addNewMessage,
  validateMessage,
};
