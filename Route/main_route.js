const express=require('express');
const route=express.Router();
const controller=require('../Controllers/main');

route.get('/start',controller.Start);
route.get('/starts',controller.Redirect);






module.exports=route;





