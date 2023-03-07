const output= {
    home :(req, res) => {
        res.render("home/index");
    },
    
    login :(req, res) => {
        res.render("home/login");
    },
}

const tmp = {
    id: ["1번", "2번", "3번"],
    pw: ["1234", "123456", "123478"]
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
        console.log(req.body);

        if(tmp.id.includes(id)){
            const idx = tmp.id.indexOf(id);
            if(tmp.pw[idx] === pw){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg: "로그인 실패",
        })
    }
}

module.exports = {
    output,
    process,
}