// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/send", (req, res) => {
  const { username, password } = req.body;
  console.log("Username:", username);
  console.log("Password:", password);
  res.send("Data received");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
