// app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api");
const PORT = 3001;
const app = express();
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");
const cors = require("./middlewars/cors");
connectToDatabase();

app.use(express.static(path.join(__dirname, "public")));

app.use(cors, cookieParser(), bodyParser.json(), pagesRouter, apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
