//서버 메인
//express사용

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home")//자동으로 index.js를 읽음(?)

//화면 설정
app.set("views", "./src/views");//뷰위치는 ./src/views에 있어 
app.set("view engine", "ejs");//뷰 엔진은 ejs를 사용할께

app.use(express.static(`${__dirname}/src/public`)); //__dirname => js위치에 파일의 이름, express statc=> 정적 경로 추가하는 함수 

//라우팅 주소 연결
app.use("/", home); //미들웨어

module.exports = app;


















//============================================
//http사용
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

//     var word = "";
//     if(req.url === "/"){
//         word = "loot";
//     }else if(req.url === "login"){
//         word = "login";
//     }

//     res.end(word +" page 한글");
// });

// app.listen(3001, () => {
//     console.log("내장 서버로 돌림")
// });
