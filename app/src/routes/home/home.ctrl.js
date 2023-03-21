const User = require("../../models/User");
const logger = require("../../config/logger")
const output= {
    home :(req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`)
        res.render("home/index");
    },
    
    login :(req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`)
        res.render("home/login");
    },

    register :(req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`)
        res.render("home/register");
    },
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body); 
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err? 400 : 200,
        }

        log(response, url);
        // console.log("controller login response: ", response);
        
        return res.status(url.status).json(response);
        //밑에 코드는 User.js를 만들기전 만든 코드 
        // const id = req.body.id;
        // const pw = req.body.pw;
        // console.log("process req.body: "+JSON.stringify(req.body));

        // // const userStorage = new UserStorage();
        // const users = UserStorage.getUsers("id", "pw");
        // const response = {};

        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx] === pw){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인 실패";
        // return res.json(response);
    },
    
    register: async (req, res) =>{
        const user = new User(req.body); 
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err? 400 : 200,
        }
        
        log(response, url);
       
        // console.log("controller register response: ", response);
        
        return res.status(url.status).json(response);
    }
}

module.exports = {
    output,
    process,
}

const log = (response, url) => {
    if(response.err){
        logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`)    
    }else{
        logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.msg || ""}`)    
    }
}