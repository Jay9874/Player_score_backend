const mongoose = require('mongoose');

// Connect to the database
const db = process.env.DB_URI;
const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(db)
        console.log('Database connected!!');
    }catch(err){
        console.log(`Ohh...error occured, ${err.message}`);
    }
}

module.exports = connectDB;