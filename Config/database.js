const mongoose = require("mongoose");

const dbConnect = () => {
    require('dotenv').config()
    mongoose.connect(process.env.DATABASE_URL)

    .then(() => console.log("Database Created Successfully"))
    .catch((error) => {
        console.log("Database Mai Error Aya Hai...");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;