const express = require('express');
const path = require('path');
const body_parser=require('body-parser');
const app = express();


app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

const main = require('./route/user');

app.use('/',express.static(path.join(__dirname,'./frontend')));

app.listen(process.env.PORT || 5000,function(){
    console.log('server started');
})