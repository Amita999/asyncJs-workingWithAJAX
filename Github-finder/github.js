class GitHub {
  constructor() {
    this.client_id = "2f8bb0304c8cfe3ed5c5";
    this.client_secret = "e9f820d45e277f834c9ab1d852ebe5d624fef1dc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret = ${this.client_secret}`
    );

    const profileData = await profileResponse.json();

    return {
      profileData,
    };
  }
}
