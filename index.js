const express = require("express");
const app = express();
const PORT = 8080;
const cron = require("node-cron");

// cron.schedule("* * * * *", () => {
//   console.log("PRINT SOMETHING");
// });

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);

  const cronJob = cron.schedule("* * * * * *", () => {
    console.log("TASK IS RUNNING");
  });

  setTimeout(() => {
    cronJob.start();
  }, 3000);

  setTimeout(() => {
    cronJob.stop();
  }, 6000);

  setTimeout(() => {
    cronJob.start();
  }, 9000);
});
