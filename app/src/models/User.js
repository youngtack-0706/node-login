const UserStorage = require("./UserStorage");

class User {
    constructor(body){
         this.body = body;
    }

    async login(){
        const body = this.body;
        try{

            const user = await UserStorage.getUserInfo(body.id);
            if(user){
                if(body.id === user.id && body.pw === user.pw){
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀림"}
            }else{
                return {success: false, msg: "아이디가 없음"}
            }
        }catch(err){
            return {success: false, err}
        }
    }

    async register(){
        try{
            const response = await UserStorage.save(this.body);
            return response;
        }catch(err){
            return {success: false, err};
        }
    }
}

module.exports = User;