//alert("Hello...")  //we are using node js not browser
/*console.log(3+
    3);   //code readbillity should be high
console.log("Washim")

let name="hitesh"
let age=21
let state=null;*/
//data type--

//number
//bigint
//string=>""
//boolean=>true/false
//null=>standlone value
//undefined=>value not assigned in the variable
//symbol=>uniqe



//object

//console.log(typeof(state));


//Stack memory(Premitive) & heap Meremory(Non-primotive0)
//

//Stack memory(not changed original value)
let name1="Washim MOlla"
let name2=name1

name2="Arijjit Dutta"

console.log(name1);
console.log(name2);


//heap memory(changed the original value)

let NumberOne=
{
    email:"ronimolla@gmail.com",
    upi_id:"user@ybl"
}

let NumberTwo=NumberOne

NumberTwo.upi_id="User2@ybl"

console.log(NumberOne.upi_id);
console.log(NumberTwo.upi_id);

