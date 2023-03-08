const UserStorage = require("./UserStorage");

class User {
    constructor(body){
         this.body = body;
    }

    login(){
        const body = this.body;
        const {id , pw} = UserStorage.getUserInfo(body.id);
        if(id){
            if(body.id === id && body.pw === pw){
                return {success: true};
            }
            return {success: false, msg: "아이디 혹은 비밀번호가 틀림"}
        }else{
            return {success: false, msg: "아이디가 없음"}
        }
    }
}

module.exports = User;