//es5 using prototypes instead of classes
//using AJAX
// create a constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Get Request

easyHTTP.prototype.get = function (url,cb) {
  this.http.open("GET",url,true);

  let self = this;
  this.http.onload = function () {
    
    if (self.http.status === 200) {
      cb(null,self.http.responseText);
    }else{
      cb("error: "+self.http.status);
    }
  };

  this.http.send();
};

//post request

easyHTTP.prototype.post = function(url,data,cb){
  this.http.open('POST',url,true);

  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function () {
    //   console.log(self.http.status);
    //   console.log(self.http.responseText); 
      cb(null,self.http.responseText);
   
      
    }
    this.http.send(JSON.stringify(data));
  };

//put request

easyHTTP.prototype.put = function(url,data,cb){
  this.http.open('PUT',url,true);

  this.http.setRequestHeader('Content-type','application/json');

  let self = this;
  this.http.onload = function () {
    //   console.log(self.http.status);
    //   console.log(self.http.responseText); 
      cb(null,self.http.responseText);
   
      
    }
    this.http.send(JSON.stringify(data));
  };


  //delete request

  easyHTTP.prototype.delete = function (url,cb) {
    this.http.open('DELETE',url,true);
  
    let self = this;
    this.http.onload = function () {
      
      if (self.http.status === 200) {
        cb(null,"Post Deleted");
      }else{
        cb("error: "+self.http.status);
      }
    };
  
    this.http.send();
  };
