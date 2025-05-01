const expressAsyncHandler = require("express-async-handler");
const {
  getAllMessageDb,
  addNewMessageDb,
  deleteAllMessagesDb,
  deleteMessageByIdDb,
} = require("../models/messages");
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("author").notEmpty().withMessage("User is required"),
  body("text").notEmpty().withMessage("Text is required"),
];

const getAllMessages = expressAsyncHandler(async (req, res) => {
  const messages = await getAllMessageDb();
  res.json(messages);
});

const addNewMessage = expressAsyncHandler(async (req, res, next) => {
  const { author, text } = req.body;

  // Validate the request body using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await addNewMessageDb({ author, text, added: new Date() });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

const deleteAllMessages = expressAsyncHandler(async (req, res, next) => {
  try {
    await deleteAllMessagesDb();
    res.status(200).json({ message: "All messages deleted successfully." });
  } catch (error) {
    next(error);
  }
});

const deleteMessageById = expressAsyncHandler(async (req, res, next) => {
  const messageId = req.params.id;
  try {
    const result = await deleteMessageByIdDb(messageId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getAllMessages,
  addNewMessage,
  deleteAllMessages,
  deleteMessageById,
  validateMessage,
};
