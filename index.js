const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("KAIZEN MD Bot is running!");
});

app.get("/menu", (req, res) => {
  res.send(`
    KAIZEN MD MENU

    .menu
    .ai
    .help
    .apk
    .video
    .song
    .sticker
  `);
});

app.listen(PORT, () => {
  console.log("KAIZEN MD is running on port " + PORT);
});
