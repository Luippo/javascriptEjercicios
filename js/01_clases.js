/**
 * Clases Primitivas
 */

 var string = new String("Esto es un string");
 console.log("String: ", string);

 var number = new Number(20);
 console.log("Number: ", number);

 var boolean = new Boolean(false);
 console.log("Bolean: ", boolean);

 /**
 * Clases Compuestas
 */

 var array = new Array("rojo","amarillo","verde");
 console.log("Array:" , array);

 var object = new Object({nombre: "Pedro", edad: 33});
 console.log("Object:" , object);

 /**
 * Clases creadas por el usuario, 
 * Crear prototipo (Prototype)
 */

 function Persona(){
     // propiedades públicas (atributos)
     this.nombre;
     this.edad;
 }

 var yo = new Persona();
 yo.nombre = "Luis";
 yo.edad = 33;

 console.log("Objeto: ",yo);

 /**
  * Clases con parámetros
  */

 function Animales(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales("Perro","Doko");
console.log("Objeto: ",mascota);