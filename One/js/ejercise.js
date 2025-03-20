/*
name: ._.
*/



let numberOne= Math.floor(Math.random()*100)+1;
let numberTwo= Math.floor(Math.random()*100)+1;

console.log("numberOne " + numberOne)
console.log("numberTwo " + numberTwo)

if(numberOne>numberTwo){
		console.log("NumberOne " + numberOne + " is greatter than numberTwo " + numberTwo);
}

else if(numberOne<numberTwo){
		console.log("NumberOne " + numberOne + " is minor than numberTwo " + numberTwo);
}

if(numberOne%2==0){
		console.log("numberOne " + numberOne + " is Par");
}
else{
		console.log("numberOne " + numberOne + " is impar");
}
if(numberTwo%2==0){
		console.log("numberTwo " + numberTwo + " is Par");
}
else{
		console.log("numberTwo " + numberTwo + " is impar");
}