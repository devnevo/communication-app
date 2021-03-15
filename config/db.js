const mongoose = require('mongoose');
const config = require('config');

const db = config.get("mongoURI");

const dbConnect = async() =>{
    
    try{
        await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        )

        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = dbConnect;