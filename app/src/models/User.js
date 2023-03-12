const UserStorage = require("./UserStorage");

class User {
    constructor(body){
         this.body = body;
    }

    async login(){
        const body = this.body;
        const {id , pw} = await UserStorage.getUserInfo(body.id);
        if(id){
            if(body.id === id && body.pw === pw){
                return {success: true};
            }
            return {success: false, msg: "아이디 혹은 비밀번호가 틀림"}
        }else{
            return {success: false, msg: "아이디가 없음"}
        }
    }

    register(){
        const response = UserStorage.save(this.body);
        return response;
    }
}

module.exports = User;