const Tinderuser={
    email: "wmolla54@gmail.com",
    name: {
        username:{
            firstName:"Washim",
            lastName:"Molla",
        }
    }
}
console.log(Object.keys(Tinderuser)) //find the keys of the Objects
console.log(Object.values(Tinderuser));//find the values of the Objects


//console.log(Tinderuser.email);
//console.log(Tinderuser.name?.username.firstName,Tinderuser.name?.username.lastName);

const objs1={
    1:"A",
    2:"B",
    3:"C",
}
const objs2={
    4:"D",
    5:"E",
    6:"F",
}

const objs3=Object.assign({},objs1,objs2)
console.log(objs3);

//another way to assign more object
const objs4={...objs1,...objs2}
console.log(objs4);


const users=[
    {
        id: 5,
        email:"xxx",
    },
    {
        id: 5,
        email:"xxx",
    },
    {
        id: 5,
        email:"xxx",
    }
]

console.log(users[1].email);
console.log(users[1].id);





