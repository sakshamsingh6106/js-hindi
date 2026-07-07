// const prom=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=true;
//         if(error==false){
//             resolve({name: "saksham", passwoed: "12345"})
//         }
//         else{
//             reject("yo your program buggin and u thuggin")
//         }
//     }, 1000)
// })
// let ret=prom
// .then(function(user){
//     return user.name;
// })
// .then(function(retarded){
//     console.log(retarded);
// })
// .catch(function(err){
//     console.log(err);
// })
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    response=response.json();
    return response
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))