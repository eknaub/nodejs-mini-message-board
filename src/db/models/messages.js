const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getAllMessageDb() {
  return messages.map((message) => {
    return { ...message };
  });
}

async function addNewMessageDb(message) {
  messages.push(message);
  return messages.map((message) => {
    return { ...message };
  });
}

module.exports = {
  messages,
  getAllMessageDb,
  addNewMessageDb,
};
