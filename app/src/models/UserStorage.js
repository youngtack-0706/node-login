const { writeFile } = require("fs");

// const fs = require("fs").promises;

const db = require("../config/db")

class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})

        return userInfo;
    }

    static #getUsers(data, isAll, fileds){
        const users = JSON.parse(data)

        if(isAll){
            return users;
        }
        const newUsers = fileds.reduce((newUsers, filed) =>{
            if(users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed]; 
            }

            return newUsers;
        }, {})

        return newUsers;
    }

    static getUsers(isAll, ...fileds) {
        // return fs.readFile("./src/databases/users.json")
        // .then((data) =>{
        //     return this.#getUsers(data, isAll, fileds);
        // })
        // .catch(
        //     console.error
        // );
    }

    static getUserInfo(id){
        return new Promise((resovle, reject) => {
            db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) =>{
                if(err){
                    reject(err);
                }else{
                    resovle(data[0]);
                }
            })
        });
        // return fs.readFile("./src/databases/users.json")
        //     .then((data) =>{
        //         return this.#getUserInfo(data, id);
        //     })
        //     .catch(
        //         console.error
        //     );
    }

    static async save(userInfo){
        // const users = await this.getUsers(true);
        // if(users.id.includes(userInfo.id)){
        //     throw "이미 존재하는 아이디입니다.";
        // }
        
        // users.id.push(userInfo.id);
        // users.pw.push(userInfo.pw);
        // users.name.push(userInfo.name);
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return {success: true};
    }
}


module.exports = UserStorage;