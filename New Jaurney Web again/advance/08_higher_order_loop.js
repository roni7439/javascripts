//for of loop

const arr=[1,5,4,7,9,3]
/*
for(let num of arr)
{
    if(num == 7)
    {
        continue //skip 7 and print other elements
    }
    console.log(num);  
}
*/
//another method with foreach
/*
arr.forEach( (item)=>{
    console.log(item);  
})
*/
//same thing using map function
arr.map( (item)=>{
    console.log(item);
    
})

//Maps
const newmap=new Map()

newmap.set("IN","India")
newmap.set("age",25)
newmap.set("Name","Arijjit")

//console.log(newmap);
for(const [keys,value] of newmap)
{
    console.log(`${keys} :- ${value}`);    
}
console.log(newmap.has("Name")); //check the keys present in the map

newmap.clear()  //clear all keys value from the map
console.log(newmap.size); //find the size of the map


const coding=["java","C","javascripts"]
coding.map((item)=>{
    console.log(item);  
})
