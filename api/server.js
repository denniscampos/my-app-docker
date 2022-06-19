import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World! 🔥" });
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .json({ message: "hello world!! Im from the backend!!! HE HE HA HA" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on ${PORT}`);
});
