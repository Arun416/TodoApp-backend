const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/todo');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api',router);

mongoose.connect(process.env.MONGO_URL).then(isConnected=>{
    if(isConnected){
        console.log("Database Connected Success");
    }
    else {
        console.log("db error")
    }
})


app.listen(process.env.PORT,()=> console.log("Server running on",process.env.PORT));