const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING....... `);

  
});
