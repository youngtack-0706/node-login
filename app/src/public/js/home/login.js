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
    console.log("id:"+id.value);
    console.log("pw:"+pw.value);
    if(id.value === "" || id.value === undefined || id.value === null){
        document.getElementById("idChk").hidden = false;
        document.getElementById("pwChk").hidden = true;
        return;
    }else if(pw.value === "" || pw.value === undefined || pw.value === null){
        document.getElementById("idChk").hidden = true;
        document.getElementById("pwChk").hidden = false;
        return;
    }
    const req = {
        id: id.value,
        pw: pw.value
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
            document.getElementById("idChk").hidden = true;
            document.getElementById("pwChk").hidden = true;
            alert(res.msg);
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"));
        //위랑 같은 의미.
        console.error("로그인 중 에러 발생");
    })
}

