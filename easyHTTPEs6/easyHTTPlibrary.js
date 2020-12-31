class EasyHttp{

    //make a http get request
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
        
    }
 //make a http post request

 post(url,data){
    let params = {
         method:'post',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(data)
     }
    return new Promise((resolve,reject)=>{
        fetch(url,params)
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
 }

    //make a put request
    put(url,data){
        let params = {
             method:'put',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(data)
         }
        return new Promise((resolve,reject)=>{
            fetch(url,params)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })
    
}

}

 



