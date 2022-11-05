const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");


const app = express();
dotenv.config();
connectDB();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send("API is runninggggg");

});

app.get('/api/chat', (req, res) => {
    res.send(chats);

});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`server started on port ${PORT}`));