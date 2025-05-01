const { Router } = require("express");
const {
  getAllMessages,
  addNewMessage,
  deleteAllMessages,
  deleteMessageById,
  validateMessage,
} = require("../db/controllers/messageController.js");

const messageRouter = Router();

messageRouter.get("/", getAllMessages);
messageRouter.get("/new", (req, res) => {
  res.render("message/form", {
    title: "New Message",
  });
});
messageRouter.post("/new", validateMessage, addNewMessage);
messageRouter.delete("/", deleteAllMessages);
messageRouter.delete("/:id", deleteMessageById);

module.exports = messageRouter;
