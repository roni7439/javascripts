//arrey

const myarr=[ 0,7,8,true,"washim"]
const myarr2=[7,8,undefined,false,"molla","arijit"]
//onsole.log(myarr);
//console.table([myarr,myarr2])  //print as table form
//console.log(myarr.length);
//console.log(myarr[2]);


/*
const arr3=new Array(4,8,9,36,54,10)
console.log(arr3.length);
console.log(arr3[1]);

*/

//arrey methods

myarr.push(100)
myarr.push(200)

console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(10)
console.log(myarr);
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf("washim"));

const newarr=myarr.join()

console.log(newarr);
console.log(typeof newarr);








