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
        confirmPw: confirmPw.value,//서버엔 안줘도 되지만 프론트처리때문에 넣어둠. 나중에 수정 해야함
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


    
    
    //값이 비어있으면 함수 실행x
    if(!name.value || !id.value || !pw.value || !confirmPw.value){
        return;
    }
    
    console.log("pw", pw.value)
    console.log("confirmPw", confirmPw.value)
    if(pw.value != confirmPw.value){
        document.getElementById("pw-check").hidden = true;
        document.getElementById("confirmPw-check").hidden = true;
        alert("비밀번호가 일치하지 않습니다.");
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
            if(res.err){
                alert(res.err);
            }else{
                alert(res.msg);
            }
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        //위랑 같은 의미.
        console.error("회원가입 중 에러 발생");
    })
}

