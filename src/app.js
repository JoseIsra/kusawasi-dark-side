const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// const routerApi = require("./routes/index");
const app = express();

// server config 😀
app.use(express.json());
app.use(cors());

// routerApi(app);

// routes 🤖
app.use("/", (req, res) => {
  res.json({
    message: " HOME DE LA PÁGINA CLARO QUE SÍ",
    emojiOfTheDay: "😃",
  });
});

app.listen(PORT, () => {
  console.log("SERVER VIVO visita http://localhost:3000");
});
