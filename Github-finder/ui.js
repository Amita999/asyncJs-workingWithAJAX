class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //Display profile in UI
  showprofile(user) {
    console.log("user :", user);
    console.log("this.profile: ", this.profile);
    this.profile.innerHTML = `
            <div class ="card card-body mb-3">
            <div class = row>
            <div class = "col-md-3">
            <img class = "img-fluid mb-2" src ="${user.avatar_url}">
            <a href ="${user.html_url}" target ="_blank" class="btn btn-primary btn-block mb-3">View Profile 
            </a>
            </div>
            <div class = "col-md-9">
            <span class ="badge badge-primary">
            Public Repos: "${user.public_repos}"
            </span>
            <span class ="badge badge-secondary">
            Public Gists: "${user.public_gists}"
            </span>
            <span class ="badge badge-success">
            Public Followers: "${user.followers}"
            </span>
            <span class ="badge badge-info">
            Following: "${user.following}"
            </span>
            <br><br>
            <ul class = "list-group">
            <li class = "list-group-item">Website: "${user.blog}"</li>
            <li class = "list-group-item">Location: "${user.location}"</li>
            <li class = "list-group-item">Email-id: "${user.email}"</li>
            </ul>
            </div>
            </div>
            </div>
            <h3 class = "page-heading mb-3">
            Latest Repos
            </h3>
            <div id="repos"></div>
            `;
  }

  //show Repos

  showRepos(repos) {
    let output = "";
    console.log("repos:",repos);
    repos.forEach(function(repo){
      output += `
  <div class = "card card-body mb-2">
  <row class>
  <div class = "col-md-6">
  <a href ="${repo.html_url}" target ="_blank">${repo.name}
  </a>
  </div>
  <div class = "col-md-6">
  <span class ="badge badge-primary">
            Stars: "${repo.stargazers_count}"
            </span>
            <span class ="badge badge-secondary">
            Watchers: "${repo.watchers_count}"
            </span>
            <span class ="badge badge-success">
            Fork: "${repo.forks_count}"
            </span>
  </div>
  </row>
  </div>
  `;
    })

   //Output repos
   console.log("output: ",output);
   document.getElementById('repos').innerHTML = output;
  } 

  //clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }

  //show alert message
  showAlert(mssg, classNAme) {
    //cleare remaining Alerts
    this.clearAlert();
    //Create Div
    const div = document.createElement("div");
    //add class
    div.className = classNAme;
    //add text
    div.appendChild(document.createTextNode(mssg));
    //Get Parent
    const container = document.querySelector(".searchContainer");
    // get the searchbox
    const search = document.querySelector(".search");
    //inster the alert
    container.insertBefore(div, search);
    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //clear alert message

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
