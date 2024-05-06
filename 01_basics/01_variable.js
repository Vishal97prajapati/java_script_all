const accountid = 12345
let accountemail = "vishalkumar@gmail.com"
var accountpassword = "kolkata" // prefer not to use var beacouse of issue on block scope and functional scope in java scripts 
accountcity = "nasadpur"


// accountid = 2   // its not allowed in  const variable 
accountemail = "amitkumar@gmail.com"
accountpassword = "uttar pradesh"
// console.log(accountid)

console.log(accountemail);
console.log(accountpassword);

console.table([accountid, accountemail, accountpassword , accountcity])