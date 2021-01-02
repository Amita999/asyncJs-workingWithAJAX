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
.then(data=>{
    // console.log(data)
    if(data.profileData.message ==="Not Found"){
    ui.showAlert('User Not Found','alert alert-danger');
    }else{
        console.log("data.profileData: ",data.profileData);
    ui.showprofile(data.profileData);
    ui.showRepos(data.repos);
    }
}
)




}else{
//clear profile
ui.clearProfile();
}

});