const addCommentbtn = document.querySelectorAll('#addComment')

for (i of addCommentbtn) {
    i.addEventListener("click",async (e)=>{
        e.preventDefault();
       postID = i.getAttribute('data-postID')
       const userObj = {
        content:document.querySelector("#content").value,
        post_id:postID
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
   
}