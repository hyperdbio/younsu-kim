"use strict";
//모듈

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");


const accessLogStream = require("./src/config/logger");
dotenv.config();
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engines", "ejs");
app.use(express.static(__dirname+'/src/public'));
app.use(express.join());
//URL을 통해 전달되는 데이터에 한글,공백등의 에러 해결코드
app.use(express.urlencoded({extended:true}));

app.use("/", home); //use-> 미들 웨어를 등록해주는 메서드

module.exports = app;
