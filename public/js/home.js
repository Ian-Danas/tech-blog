const addCommentbtn = document.querySelectorAll('#addComment')

for (let i = 0; i < addCommentbtn.length; i++) {
    const element = addCommentbtn[i];
    element.addEventListener("click",async (e)=>{
       postID = element.getAttribute('data-postID')
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