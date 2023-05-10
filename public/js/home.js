addCommentbtn = document.querySelector('#addComment')
console.log(addCommentbtn)

addCommentbtn.addEventListener("click",async (e)=>{
    e.preventDefault();
    console.log('pressed button')
   const userObj = {
    content:document.querySelector("#content").value,
    post_id: document.querySelector('#post-card').getAttribute('data-postID')
}
 console.log(userObj)
   const comment = await fetch("/api/comment",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    location.reload()
})