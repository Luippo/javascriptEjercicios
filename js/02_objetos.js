/**
 * Objetos, Propiedades y Métodos. 
 */

 var object = {
    //  Propiedades
    nombre:"Luis",
    edad: 33,
    description: function(){
        console.log("Nombre: ", object.nombre, ", Edad: ", object.edad, " años.")
    },
    saludar: function(saludo){
        console.log(saludo+" "+object.nombre);
    }
 }

console.log("Nombre: ",object.nombre);
console.log("Edad: ", object.edad);
object.description();

object.saludar("Hola");

/**
 * OBJETOS PRIMITIVOS
 */

var fecha = new Date();
console.log("Fecha:", fecha);

var ano = fecha.getFullYear();
console.log("Año",ano);