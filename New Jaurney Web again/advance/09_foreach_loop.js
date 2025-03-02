
//for each loop


const coding=["js","C","java","css"]
/*
coding.forEach(function (item){
    console.log(item);   
})
*/

//another methodts
/*
function arr(item){
    console.log(item);    
}
coding.forEach(arr)
*/
//or another methods

coding.forEach( (item)=>{
   // console.log(item);   
})

const newarr=[
    {
        codelanguage: "JavaScripts",
        price: 3640,
    },
    {
        codelanguage: "C++",
        price: 2100,
    },
    {
        codelanguage: "Rubbby",
        price: 2900,
    },
    {
        codelanguage: "React Native",
        price: 9000,
    },
]

newarr.forEach((item)=>{
    //console.log(`${item.codelanguage} price is ${item.price}`);
    
})


//with filter
const myNumber=[1,2,3,4,5,6,7,8,9,10]  //with return
let value=myNumber.filter( (num)=>{
    return num<5
})
//console.log(value);

value=myNumber.filter( (num)=>num<5) //single line-no return
//console.log(value);


//same thing with different approch(for each)
const newarr2=[]
myNumber.forEach( (num)=>{   //need if-else for foreach case
    if(num<5)
    {
        newarr2.push(num)
    }
})
//console.log(newarr2);

//add 10 with each elements in the arrey
value=myNumber.map( (num)=>{
    return num+10
})
//console.log(value);


//chaining of map,filter
value=myNumber.map( (num)=>num*10).map( (num)=>num+1).filter( (num)=>num>=40)
console.log(`the Value above the 40 are ${value}`);




