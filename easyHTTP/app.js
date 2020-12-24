const http = new easyHTTP;

const data ={
    title:"Custom Post",
    body:"This is a custom post"
}
// Get Method
http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
   
});
// Post Method
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }

});
//put method
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }

});


//delete method
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});