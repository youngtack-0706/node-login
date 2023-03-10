const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#button");


id.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      login();
    }
});

pw.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      login();
    }
});

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        pw: pw.value
    }
    
    const loginInfo = ["id", "pw"];
    
    loginInfo.reduce((newUsers, info, acc, curr) =>{
        if(!req[info]){
            const userInfo = JSON.parse(JSON.stringify(loginInfo))
            var count = 0;
            for(var i=acc; i<loginInfo.length; i++){
                document.getElementById(userInfo[i]+"-check").hidden = false;
                curr.splice(1);  // eject early
                count = i+1;
            }

            if(count < userInfo.length){
                for(var i=count; i<userInfo.length; i++){
                    document.getElementById(userInfo[i]+"-check").hidden = true;
                }
            }
        }else{
            document.getElementById(info+"-check").hidden = true;
        }
    }, {})

    if(!req.id || !req.pw){
        return;
    }



    //제이슨 값을 출력하는 방법. 안하면 [object Object]라고 뜸
    console.log("req: "+JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/"
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        //위랑 같은 의미.
        console.error("로그인 중 에러 발생");
    })
}

