console.log("Control de Flujo IF-Else---------------------------")
const value = true;//si es true entra a la linea 5   si es distinto entra a la linea 7

if (value==true) {
    console.log("Es verdadero");
}else{
    console.log("No es verdadero");
}
console.log("\nEjemplo dia de la semana con If-Else---------------------")

const dia = 9;

if(dia===1){
    console.log("Lunes");
}else if(dia===2){
    console.log("Martes");
}else if(dia===3){
    console.log("Miercoles");
}else if(dia===4){
    console.log("jueves");
}else if(dia===5){
    console.log("Viernes");
}else if(dia===6){
    console.log("Sabado");
}else if(dia===7){
    console.log("Domingo");
}else{
    console.log("Dia no valido");
}

console.log("\nEjemplo dia de la semana con Switch---------------------")

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");
}    

console.log("\nEjemplo dia de la semana con for---------------------")
    const lista = ["lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let encontrarDia = "Miercoles";
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]===encontrarDia){
            console.log("Hoy es "+lista[i]);
            break;
        }
    }

console.log("\nEjemplo Table de multiplicar con FOR---------------------")
    
    for (let i = 0; i < 11; i++) {
        console.log("5 * "+i+" = "+(5*i));
    }    

console.log("\nEjemplo Table de multiplicar con FOR y operador  TERNARIO---------------------")    
    for (let i = 0; i < 11; i++) {
        console.log(`2 X${i} = ${i*2}`);
    } 

console.log("\nOtro ejemplo");
let nuevoDia = 3;
(nuevoDia)
?console.log('Lunes')
:console.log('Martes')

console.log("\n--------------------------------------");

let edad = 18;
let mensaje=(edad >=18)
?"Eres mayor de edad"
:"Eres menor de edad";
console.log(mensaje);

console.log("\n--------------------------------------");
let años = 21;
let message=(edad>=18) ? (edad<=25
?"Eres un adulto joven" :"Eres un adulto mayor")
:"Eres menor de edad";
console.log(message);