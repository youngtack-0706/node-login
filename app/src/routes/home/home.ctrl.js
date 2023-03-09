const User = require("../../models/User");
const output= {
    home :(req, res) => {
        res.render("home/index");
    },
    
    login :(req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const user = new User(req.body); 
        const response = user.login();
        console.log("controller login response: ", response);
        
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
    }
}

module.exports = {
    output,
    process,
}