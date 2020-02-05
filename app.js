const express=require('express');
const app=express();
const main=require('./Route/main_route');


app.use('/main',main);


















module.exports=app;