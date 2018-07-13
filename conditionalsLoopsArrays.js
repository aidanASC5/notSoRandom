//const roster = ['Pikachu', 'MewTwo', 'Onix', 'Eevee'];
//console.log("Challenge #7:");
//for (let i=0 ; i < roster.length;i++){
//const firstword = roster[i];
//const firstletter = firstword[0];
//const lastletter = firstword[firstword.length-1];
//console.log(firstletter, lastletter);
//}
let health = 100
let money = 100 

let item = process.argv[2]
console.log(item)

if ( item === "jacket"){
 money = money-40;
 health = health + 20;
 console.log("You bought a jacket");
 }else if( item === "candy"){
 money = money-10;
 console.log("You bought candy");
 }
 else {
 console.log("You bought nothing");
 }