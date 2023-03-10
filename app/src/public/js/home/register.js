const name = document.querySelector("#name");
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerBtn = document.querySelector("#button");

id.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      register();
    }
});

pw.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      register();
    }
});

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        name: name.value,
        id: id.value,
        pw: pw.value,
        confirmPw: confirmPw.value,
    }
    console.log("req: "+JSON.stringify(req));

    const registerInfo = ["name", "id", "pw", "confirmPw"];

    registerInfo.reduce((newUsers, info, acc, curr) =>{
        if(!req[info]){
            const regiInfo = JSON.parse(JSON.stringify(registerInfo))
            var count = 0;
            for(var i=acc; i<registerInfo.length; i++){
                document.getElementById(registerInfo[i]+"-check").hidden = false;
                curr.splice(acc);  // eject early
                count = i+1;
            }
            if(count < regiInfo.length){
                for(var i=count; i<regiInfo.length; i++){
                    document.getElementById(regiInfo[i]+"-check").hidden = true;
                }
            }

            console.log("값 없음: ", info)
            return;
        }else{
            console.log("값 있음: ", info)
            document.getElementById(info+"-check").hidden = true;
        }
    }, {})

    if(!req.name || !req.id || !req.pw || !req.confirmPw){
        return;
    }


    //제이슨 값을 출력하는 방법. 안하면 [object Object]라고 뜸

    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login"
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        //위랑 같은 의미.
        console.error("회원가입 중 에러 발생");
    })
}

