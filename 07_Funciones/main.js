//Funcionee

//alert();
//prompt();
//console.log();
//Number();
//if();
//for(); 

//----------------------------------> 

//function declaration
//function suma (){
  //  console.log( 5 + 5 );
    
//}

//suma();

//function expresion 
//let resta = function(){
  //  console.log(10-9)
//}
//resta();

//Arrow function --------------------------------------> Ejemplo 1

//const suma2 = (a = 0 , b = 0) => {
  //  console.log( a + b );
//};

//suma2(10 , 10);
//suma2(100 , 50)
//suma2();

//const saludar = (usuario= "invitado")=> {
  //  console.log("Bienvenido; "  + usuario); 
//}

//saludar("Kevin")
//saludar(); 

//function saludar2(persona = "pepe") {
  //  console.log("hola " + persona)
//}
//saludar2(); 
//saludar2("Juanito"); 


//const ciclo = (x=1 , y=10 , z=1 ) => {
  // for(let i = x; i <= y; i = i+z) {
    //   console.log(i);
   //}
//}

//Pasa como primer parametro el inicio, como segundo el final y como tercero de cuanto en cuanto
//ciclo(5, 50, 2);

//----------------------------------------------------> 


//Ejemplo 2 de tablas ---------------------------------->

//const tablas = (a , b ) =>{
    //for(let i = a; i <= b; i++ ){
        //for(let k = i; k <= 10; k++) {
        //console.log(i + "x" + k + "=" + i + k );
         //}
    //}
    
//}

//tablas(4 , 7); 

//----------------------------------------------------------> 

//Ejemplo 3 ------------------------------------------------> 
const nuevaSuma = (a , b) => {
    return a + b; 
} 

nuevaSuma(3 , 2)

const nuevaResta = (a , b) => {
    return a - b ;
}

nuevaResta(9, 1)

const multiplicacion = ( a , b) => {
     return a * b ;
}

console.log(multiplicacion (nuevaSuma(3,2) , nuevaResta(9,1))); 

