class UserStorage {
    static #tmp = {
        id: ["1번", "2번", "3번"],
        pw: ["1234", "123456", "123478"],
        name: ["김일일", "김이이", "김삼삼", "김사사"],
    }

    static getUsers(...fileds) {
        const users = this.#tmp;
        const newUsers = fileds.reduce((newUsers, filed) =>{
            if(users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed]; 
            }

            return newUsers;
        }, {})

        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#tmp;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})

        return userInfo;
    }
}


module.exports = UserStorage;