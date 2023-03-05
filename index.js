const express = require("express");
const app = express();
const PORT = 8080;
const cron = require("node-cron");

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
