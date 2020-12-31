const http = new EasyHttp();

//Get Posts
http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  // Create Post
http
  .post("https://jsonplaceholder.typicode.com/posts", {
    userId: 34,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// Update Post

http
  .put("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));