
const express=require('express');
const path =require('path');
const router = require('express').Router();


router.get('/',function(req,res){
    res.send('hello');
})

router.post('/email',function(req,res){
    console.log(req);
})
module.exports = router;