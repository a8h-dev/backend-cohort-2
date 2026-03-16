// start | db connect
const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to Database")
    })
}

connectDB();

app.listen(3000, () => {
    console.log("Server running on port 3000");
})