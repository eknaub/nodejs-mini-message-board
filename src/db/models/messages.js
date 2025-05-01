const pool = require("../pool.js");

async function getAllMessageDb() {
  try {
    const data = await pool.query("SELECT * FROM messages ORDER BY id DESC;");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to fetch messages from the database.");
  }
}

async function addNewMessageDb(message) {
  try {
    const { text, author, added } = message;
    const result = await pool.query(
      "INSERT INTO messages (text, author, added) VALUES ($1, $2, $3) RETURNING *;",
      [text, author, added]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to add a new message. Please check your input.");
  }
}

async function deleteAllMessagesDb() {
  try {
    await pool.query("DELETE FROM messages;");
  } catch (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to delete messages.");
  }
}

async function deleteMessageByIdDb(messageId) {
  try {
    const result = await pool.query(
      "DELETE FROM messages WHERE id = $1 RETURNING *;",
      [messageId]
    );
    if (result.rowCount === 0) {
      throw new Error("Message not found.");
    }

    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error.message);
    throw new Error("Failed to delete the message.");
  }
}

module.exports = {
  getAllMessageDb,
  addNewMessageDb,
  deleteAllMessagesDb,
  deleteMessageByIdDb,
};
