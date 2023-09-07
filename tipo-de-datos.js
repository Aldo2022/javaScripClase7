//------------------------VARIABLE GLOBAL--------------------------------
console.log("Variable Global---------------------------------------");
let nombre = "Jhon" 

function saludaar(){
    console.log(nombre);
}
saludaar();
console.log("");
//------------------------VARIABLE LOCAL--------------------------------
console.log("Variable Local---------------------------------------");
function salud(){
    let nombre="Juan"
    console.log("Hola "+nombre);
}
salud();
console.log("");
