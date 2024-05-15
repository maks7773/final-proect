// app.js 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/api');
const PORT = 3000;
const app = express();
connectToDatabase();
// Теперь клиент имеет доступ только к публичным файлам
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(
bodyParser.json(),
apiRouter
); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})