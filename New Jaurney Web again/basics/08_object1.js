


const sym=Symbol("key1")
const user={
    name: "Washim Moilla","full_name": "Arijit dutta",
    age:18,
    [sym]: "MySymbol69",
    location: "Kolkata",
    email: "wmolla54@gmail.com",
    lastLogin: ["Monday","sunday"]
}
/*

//console.log(user.age)
console.log(user["age"])

//console.log(user.name)
console.log(user["full_name"])

console.log(user[sym])
console.log(typeof sym);
console.log(typeof user[sym])


//update the value
user.email="ronimolla056@gmail.com"
console.log(user.email);


//freez the value
Object.freeze(user)
user.age=28
console.log(user.age);

*/

console.log(user);

user.greeding=function()
{
    console.log(`hello coder,${user.name}`);
    
}

console.log(user.greeding());


