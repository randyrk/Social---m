import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotnev from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'





const app = express();
app.use(bodyParser.json({limit:'30mb',extended:'true'}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:'true'}));

dotnev.config()

mongoose.connect(process.env.MONGO_DB).then(() => app.listen(process.env.PORT, ()=> console.log("Listening",process.env.PORT)))
.catch((error) => 
    console.log('Error connecting to MongoDB:', error));

app.use('/auth',AuthRoute)