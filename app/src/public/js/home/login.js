const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login(){
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
            
        }else{

        }
    })
}

