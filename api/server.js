import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World! 🔥" });
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .json({ message: "hello world!! Im from the backend!! 🚀" });
});

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'home page test from windows' })
})

app.listen(PORT, (req, res) => {
  console.log(`Server running on ${PORT}`);
});
