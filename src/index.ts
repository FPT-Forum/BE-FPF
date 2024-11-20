import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user";

const app = express()

app.use(express.json())

const MONGO_URL = 'mongodb://localhost:27017/'
mongoose.connect(MONGO_URL, {
    dbName: "user"
})
    .then(() => {
        console.log('database connected');
    })
    .catch((error) => {
        console.log(error);
    })

app.use('/', router)
app.listen(3003, () => {
    console.log('Server running on http://localhost:3003');

})