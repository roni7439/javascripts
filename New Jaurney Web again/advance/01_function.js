function myfunction(){
    console.log("Roni");
    
}

//myfunction()
/*
function add(numver1,number2)
{
    R=numver1+number2
    console.log(R);
    
}
add(69,1)
*/

function add(numver1,number2)
{
    R=numver1+number2
    //console.log(R);
    return R;
   // console.log("roni"); //not rechable code
    
    
}
let result=add(96,4);
//console.log(result);

function userloggin(username)
{
    if(username == undefined)
    {
        console.log("Please Enter UserName...");
        return
    }
    else
    {
        return `${username}, just logged-in`
    }
}
console.log(userloggin("Arijjit"));
