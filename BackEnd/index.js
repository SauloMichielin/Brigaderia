const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Hello from the test route!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});