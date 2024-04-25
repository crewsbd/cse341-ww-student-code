require("dotenv").config();

// 3rd party
const express = require("express");
const cors = require("cors");

// Internal modules
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(routes);

function startApp() {
  try {
    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Server started on ${process.env.HOST}:${process.env.PORT}`);
    });
  } catch {
    console.log("App failed start");
  }
}

startApp();
