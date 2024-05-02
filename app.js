// app.js 
const express = require('express');
const path = require('path');
const gamesRouter = require('./routes/games'); 
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const PORT = 3000;
const app = express();

// Теперь клиент имеет доступ только к публичным файлам
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(
bodyParser.json(),
usersRouter,
categoriesRouter,
gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})