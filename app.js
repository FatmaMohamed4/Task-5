const express=require('express')
const itemRoute=require('./route/itemRoute')

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


app.use('/items',itemRoute)





module.exports=app;
