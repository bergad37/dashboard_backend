import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import allRoutes from './routes/allRoutes.js';
import mongoose from 'mongoose';


dotenv.config();

//server instance 
const app=express();


app.use(cors());
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

app.use("/api/v1",allRoutes)


const port = process.env.PORT || 2000;
const host = process.env.HOST || 'localhost';


//Database connection instance by default these useNew and topology is set to true 
const connect=()=> mongoose.connect(process.env.MONGODB_URL  ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//An instance to listen to the server 
const startServer = () =>app.listen(port);

Promise.all([connect(),startServer()])
.then(()=>{
    console.log(`Database connected and server listening at http://${host}:${port}`)
})
.catch((error)=>console.log(error))
 
















