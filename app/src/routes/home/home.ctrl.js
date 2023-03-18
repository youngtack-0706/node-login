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
        if(response.err){
            logger.error(`POST /login 200  Response: "success: ${response.success}, ${response.err}"`)    
        }else{
            logger.info(`POST /login 200  Response: "success: ${response.success}, msg: ${response.msg}"`)
        }
        // console.log("controller login response: ", response);
        
        return res.json(response);
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
        if(response.err){
            logger.error(`POST /register 200  Response: "success: ${response.success}, ${response.err}"`)    
        }else{
            logger.info(`POST /register 200  Response: "success: ${response.success}, msg: ${response.msg}"`)
        }
       
        // console.log("controller register response: ", response);
        
        return res.json(response);
    }
}

module.exports = {
    output,
    process,
}