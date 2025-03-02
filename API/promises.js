// const promis1 = new Promise(function (resolve, reject) {
//     //do an asyn task
//     //DB calls
//     //cryptography,nework

//     setTimeout(function () {
//         console.log("Asyn Task Is complete");
//         resolve()
//     }, 1000)
// })

// promis1.then(function(){
//     console.log("Promis Consume");

// })

//----------------------------------------------------------------
// const value=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("The Task Is Completed");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Completed");

// })


//--------------------------------------------------------------------
// const promis3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({UserName:"Washim Molla",Email:"Wmolla54@gmail.com"})
//     },1000)
// })
// setInterval(function(){
//     promis3.then(function(user){
//         console.log(user);     
//     })
// },1000)

//--------------------------------------------------------------------

// const promis4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error)
//         {
//             resolve({
//                 userName:'Washim',
//                 pass:"Washim@123"
//             })
//         }
//         else
//         {
//             reject("Error: Something Error Wrong")
//         }

//     },1000)
// })

// promis4.then((user)=>{
//     console.log(Object.keys(user));
//     console.log(Object.values(user));

// }).catch(function(error){
//     console.log((error));

// }).finally(()=>{
//     console.log("The Promis is resolved or rejected");

// })

//-----------------------------------------------------------------

const promis5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                userName: 'Washim',
                pass: "Washim@7439"
            })
        }
        else {
            reject("Error: Something Error Wrong")
        }

    }, 1000)
})

promis5.then((user)=>{
    return user
})
.then((user)=>{
    console.log(user);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promis is resolve or rejected");
    
})