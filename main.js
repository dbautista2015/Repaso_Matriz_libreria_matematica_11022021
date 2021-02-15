/*Librería matemática*/
//raiz cuadrada
let raiz_cuadrada = Math.sqrt(25);
console.log("Raíz cuadrada de 25");
console.log(raiz_cuadrada);
//raiz cúbica
let raiz_cubica = Math.cbrt(27);
console.log("Raíz cúbica de 27");
console.log(raiz_cubica);
//ordenar una lista
let data1 = [1, 8, 2, 52, 68, 100, 200];
let a = [1,2,3,4,5];
// let orden =data1.sort();
// console.log(orden);
//Número mayor
let numero_mayor = Math.max(1,2,3,4,5);
//No me funciona colocando el arreglo como otra variable
console.log("El numero mayor es")
console.log(numero_mayor);
//console.log(Math.max(1,2,3,4,5));
//Número menor
let numero_menor =Math.min(1,2,3,4,5);
console.log("El numero menor es")
console.log(numero_menor);
//aleatorios
let aleatorio = Math.random()*100;
document.write(aleatorio);
//otro ejemplo
for (let i = 0; i < 10; i++) {
    let aleatorio = Math.random()*100;
    document.write(Math.trunc(aleatorio)+"<br>");
    
}

// let aleatorio = Math.random()*100;
// document.write(" Numero aleatorio <br>"+aleatorio.toString());
// document.write("<br> Redondear despues de 5<br>"+Math.round(aleatorio));
// document.write("<br> Redondear antesde de 5<br>"+Math.floor(aleatorio));
// document.write("<br> Tomar el numero entero<br>"+Math.trunc(aleatorio));
//redondeo
console.log("redondeo y truncado");
console.log(Math.round(1.25456));
console.log(Math.trunc(aleatorio));

//console.log(Math.PI);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.E);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(LOG10E);

//// declarar matrices perfectas

// const cont = 10;
// const array = new Array(cont);
// for (let i = 0; i < cont; i++) {
//     array[i] = new Array(cont).fill(null);
// }

// array[0][0] = "Diana";
// array[1][1] = "Bautista";
// array[2][2] = 38;
// array[3][3] = false;
// array[3][3] = "CARRERA 2".toLowerCase();
// console.log(array);


// Metodo de relleno con listas

// let array = new Array(5).fill(()=>{return `USUARIO NO ENVIO NADA`;});

// array.fill("miguel",1,4);

// let id = 3;

// if(typeof(array[id])!="function"){
//     console.log(array[id]);
// }else{
//     console.log(array[id]());
// }



// matriz construida manualmente

// const matriz = [
//     "Diana",
//     38,
//     true,
//     ()=>{
//         let data = 2 + 2;
//         return `${data}`;
//     },
//     16%2,
//     [
//         [
//             "dbautista2015",
//             "Diana"
//         ]
//     ]
// ];
