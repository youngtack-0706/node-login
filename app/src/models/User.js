const UserStorage = require("./UserStorage");

class User {
    constructor(body){
         this.body = body;
    }

    async login(){
        const body = this.body;
        try{

            const {id , pw} = await UserStorage.getUserInfo(body.id);
            if(id){
                if(body.id === id && body.pw === pw){
                    return {success: true};
                }
                return {success: false, msg: "비밀번호가 틀림"}
            }else{
                return {success: false, msg: "아이디가 없음"}
            }
        }catch(err){
            console.log(err);
        }
    }

    async register(){
        try{
            const response = await UserStorage.save(this.body);
            return response;
        }catch(err){
            return {success: false, msg: err};
        }
    }
}

module.exports = User;