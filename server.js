const cors = require("cors");
const express = require("express");
const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
const init = require("./src/routes");
app.use(express.urlencoded({ extended: true }));
init(app);

const port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
