// app.js 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/api');
const PORT = 3000;
const app = express();
const cookieParser = require("cookie-parser");
const pagesRouter = require('./routes/pages');
connectToDatabase();

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(
  cookieParser(),
bodyParser.json(),
pagesRouter,
apiRouter
); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})