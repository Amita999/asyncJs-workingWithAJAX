document.getElementById('button').addEventListener('click',loadData);

  function loadData(){
    // create a xhr object

    const xhr =new XMLHttpRequest();

    xhr.open('get','data.txt',true);

    xhr.onload = function(){
        if(this.status == '200'){
     document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`
        }
    }

    // xhr.onerror = function(){
    //    console.log({onerror}); 
    // }

    xhr.send();
}