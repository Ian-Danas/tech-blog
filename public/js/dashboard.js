addPostbtn = document.querySelector('#addPost')
console.log(addPostbtn)

addPostbtn.addEventListener("click",e=>{
    e.preventDefault();
    const userObj = {
        title:document.querySelector("#title").value,
        content:document.querySelector("#content").value,
    }
    console.log(userObj)
    fetch("/api/post",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/"
        } else {
            alert("trumpet sound")
        }
    })
})