
function fetchalt(url){
    return new Promise(function(resolve,reject){
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
            resolve(xhr.responseText);
        }
        else{
            reject(`ERROR : ${xhr.status}`);
        }
    };
    xhr.onerror=function(){
         reject("NETWORK ERROR");
    }
    xhr.send();
})
 }
fetchalt('https://api.github.com/users/hiteshchoudhary').then(function(response){
       console.log(typeof(response));
       console.log(response);
}).catch(function(err){
console.log(err);
})