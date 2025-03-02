const marvel_heroes=["thor","ironeman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//we can use to join two arrey using concat and sprate methods

let newarr=marvel_heroes.concat(dc_heroes)
console.log("Using concat ",newarr);

//aother methods
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log("Using sprate ",all_new_heroes);


//we can convert the arrey with different sub arrey in a single arrey using flat methods
const another_arr=[7,8,6,[5,1,0,['Washim',"Roni"]],100,[7,123]]
const real_another_arr=another_arr.flat(Infinity)
console.log("Using flat ",real_another_arr);

let score1=100
let score2=200
let score3=300

console.log("Convert The variabls into arrey: .",Array.of(score1,score2,score3));



