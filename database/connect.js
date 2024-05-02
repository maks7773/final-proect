const mongoose = require ('mongoose')

const DB_URL = 'mongodb://localhost:27017/pindie';

async function connectToDatabase() {
    try{
        await mongoose.connect(DB_URL);
        console.log('успешно подключились к MongoDB')
    }
    catch(err){
        console.log('при подключении монго дб возниклла ошибка');
        console.log(err);
    }
}

module.exports =connectToDatabase;