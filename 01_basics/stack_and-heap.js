 //  TYPE OF MEMORY IN JAVA SCRIPTS 

 // STACK (PRIMITIVE ) ALL PRIMITIVE TYPE OF DATA TYPE MEANS STACK MOMERY // ITS ALL VALUE AS A COPY 
 // HEAP (NON - PRIMITIVE) ALL NON PRIMITIVE DATA TYPE MEANS HEAP MOMER  // ITS  ALL VALUE AS A REFERACE 


 let vishal = "vishalprajapati@gmail.coom"
 let anothername = vishal

 anothername = "vishalwithcode"
  console.log(vishal)
  console.log(anothername);


  let username = {
    email : "vishal197@gmail.com",
    upi : "username@ybl"
  }
  let usertwo = username
  usertwo.email = "vishal@google.com"
  console.log(username.email);
  console.log(usertwo.email);