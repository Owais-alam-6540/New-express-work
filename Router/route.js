let express= require('express');
let r=express.Router();

let fun =require("../Function/logic")

r.get("/i",fun.home);

module.exports=r