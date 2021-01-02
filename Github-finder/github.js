// class GitHub {
//   constructor() {
//     this.client_id = "2f8bb0304c8cfe3ed5c5";
//     this.client_secret = "e9f820d45e277f834c9ab1d852ebe5d624fef1dc";
//   }

  // class GitHub {
  //   constructor() {
  //     this.config = {
  //       headers: {
  //         Authorization: 'e08302303b3b6d0bd6dc2e1009a9fe50101336d4'
  //       }
  //     }
  //     this.repos_count = 5
  //     this.repos_sort = 'created: asc'
  //   }
 
    // async getUser(user) {
    //   const profileResponse = await fetch(
    //     `https://api.github.com/users/${user}`,
    //     this.config
    //   )
   
    //   const repoResponse = await fetch(
    //     `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
    //     this.config
    //   )
   
    //   const profileData = await profileResponse.json()
   
    //   const repos = await repoResponse.json()
   
    //   return {
    //     profileData,
    //     repos
    //   }
    // }
  // }
//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret = ${this.client_secret}`
//     );

//     const profileData = await profileResponse.json();

//     return {
//       profileData,
//     };
//   }
// }

class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: '2d339e7b4ce81e056e6618152d103d422095a60e',
       
      },
      

    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(user) {
    // cache the user so if we get a bad response we show the last 'good' user
    let cachedUser = {}
 
    const profileResponse = fetch(
      `https://api.github.com/users/${user}`,
      this.config
    )
 
    const repoResponse = fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )
 
    // concurrently fetch profile and repos
    const responses = await Promise.all([profileResponse, repoResponse])
 
    // check response was good
    if (responses.every((res) => res.ok)) {
      const [profileData, repos] = await Promise.all(
        responses.map((promise) => promise.json())
      )
      cachedUser = { profileData, repos }
    } else {
      cachedUser.message = 'User Not Found'
    }
 
    return cachedUser
  }
}