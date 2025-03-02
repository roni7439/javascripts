const mynum=[1,2,3,4]
const mytotal=mynum.reduce(function (acc,current_value){
    console.log(`acc: ${acc}`);
    
    return acc + current_value;
}, 3
)
console.log(mytotal);
