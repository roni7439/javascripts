function calculate_cart_price(...num1) //'...'=is rest operetor
{
    return num1
}

//console.log(calculate_cart_price(200,300,800,600,500));

//finction withg objects....
const user={
    name: "roni",
    price: 999,
}

function handle_object(anyObject)
{
    console.log(`UserName is ${anyObject.name} and price ${anyObject.price}`);
    
}

//handle_object(user)
//another way
handle_object(
    {
        name:"Washim Molla",
        price:199
    }
)

//function with arrey.....


const myarr=[455,125,"roni","tony"]

function function_Array(anyArrey)
{
    return anyArrey
}
//console.log(function_Array(myarr));
//anither way
console.log(function_Array(
    [
        "rajesh","Biswarup","Deep",465
    ]
))



