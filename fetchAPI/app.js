let mybtn = document.getElementById('mybtn');
let content = document.getElementById('content');

// function getData(){
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
// return response.text();
// }).then((data)=>{
// console.log(data);
// })}

function postData(){
    url = 'https://jsonplaceholder.typicode.com/posts';
    data ={
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    params = {
        method:'post',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    }

 fetch(url,params)
 .then(response => response.json())
 .then(data=>console.log(data))
}

// getData();
postData()