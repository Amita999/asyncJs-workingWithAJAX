const github = new GitHub;
const ui = new UI;
// Search Input
const searchUser = document.getElementById("searchUser");
// adding event listener
searchUser.addEventListener("keyup",(e)=>{
let inputText = e.target.value;
if(inputText != ''){
//make a http call
github.getUser(inputText)
.then(cachedUser=>{
    // console.log(cachedUser)
    if(cachedUser.message ==="Not Found"){
    ui.showAlert('User Not Found','alert alert-danger');
    }else{
        console.log("cachedUser.profileData: ",cachedUser.profileData);
    ui.showprofile(cachedUser.profileData);
    ui.showRepos(cachedUser.repos);
    }
}
)




}else{
//clear profile
ui.clearProfile();
}

});