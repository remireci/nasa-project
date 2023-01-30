const mongoose = require("mongoose");

//Update below to match your own MongoDB connection string.
const MONGO_URL = "mongodb+srv://nasa-api:bLmoRBYjO4gbTJY5@cluster0.mga2mfm.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.on("open", () => {
    console.log("MongoDB connection ready!")
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});

async function mongoConnect() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();

}

module.exports = {
    mongoConnect,
    mongoDisconnect
}