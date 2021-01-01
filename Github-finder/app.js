const github = new GitHub;
// Search Input
const searchUser = document.getElementById("searchUser");
// adding event listener
searchUser.addEventListener("keyup",(e)=>{
let inputText = e.target.value;
if(inputText != ''){
//make a http call
github.getUser(inputText)
.then(data=>
console.log(data)
if(data.profileData.message ==="Not Found"){

}else{

}
)




}else{
//clear profile

}

});