
let a=10//global veriable
var b=52//global veriable
if(true)
{
    let a=500  //local veriable
    //var b=6 //must be avoid 'var
    let b=20
    console.log("Inner: ",a);
    console.log("Inner: ",a);
    
}

console.log("Outer: ",a);
console.log("Outer: ",b);


//nested scope
//for function

function first_fn()
{
    const name="Washim Molla"
    function second_fn()
    {
        const web="youtube"
        console.log(`Name is ${name}, Channel is ${web}`);  
    }
    second_fn();
}
first_fn();