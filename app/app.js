//서버 메인
//express사용

//모듈
const express = require("express");
// const bodyParser = require("body-parser")//request의 값을 확인하기 위한 모듈
const app = express();

//라우팅
const home = require("./src/routes/home")//자동으로 index.js를 읽음(?)

//화면 설정
app.set("views", "./src/views");//뷰위치는 ./src/views에 있어 
app.set("view engine", "ejs");//뷰 엔진은 ejs를 사용할께

app.use(express.static(`${__dirname}/src/public`)); //__dirname => js위치에 파일의 이름, express statc=> 정적 경로 추가하는 함수 

// app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
// app.use(bodyParser.urlencoded({extended: true}));

//express 4.16.0버전 이상 부터는 이렇게 사용해도 request값 확인가능
app.use(express.json());

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
