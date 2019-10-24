/*=============================================
CASO 1. LOS CUATRO ATLETAS. 

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás de B, y D ha llegado en medio de A y C. ¿Podría usted calcular el orden de llegada?

B -> 1
C -> 2
D -> 3
A -> 4

=============================================*/

var atletas = {
    corredorA: 0,
    corredorB: 0,
    corredorC: 0,
    corredorD: 0,
    resultado: function(){
        if(this.corredorC > this.corredorB && 
            this.corredorD > this.corredorB &&
            this.corredorD > this.corredorC &&
            this.corredorD < this.corredorA ){
            
            return true;    
        }
        return false;
    },
    intervalo: setInterval(function(){

        atletas.corredorA = Math.ceil(Math.random()*4);
        atletas.corredorB = Math.ceil(Math.random()*4);
        atletas.corredorC = Math.ceil(Math.random()*4);
        atletas.corredorD = Math.ceil(Math.random()*4);

        if(atletas.resultado()){
            clearInterval(atletas.intervalo);
            console.log("corredor A", atletas.corredorA);
            console.log("corredor B", atletas.corredorB);
            console.log("corredor C", atletas.corredorC);
            console.log("corredor D", atletas.corredorD);
        }
    },10)

}

/*=============================================
CASO 2. CABALLOS. 

El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

=============================================*/

var corraleros = {
    Mac: {edad: 0, velocidad: 0, tono: 0},
    Smith: {edad: 0, velocidad: 0, tono: 0},
    Jack: {edad: 0, velocidad: 0, tono: 0},
    Willy: {edad: 0, velocidad: 0, tono: 0},
    resultado: function(){
        if(corraleros.Mac.tono > corraleros.Smith.tono &&
           corraleros.Mac.velocidad > corraleros.Jack.velocidad &&
           corraleros.Mac.edad > corraleros.Jack.edad &&
           corraleros.Willy.velocidad > corraleros.Jack.velocidad &&
           corraleros.Mac.edad > corraleros.Willy.edad &&
           corraleros.Mac.edad > corraleros.Smith.edad && 
           corraleros.Willy.tono > corraleros.Smith.tono &&
           corraleros.Smith.velocidad && corraleros.Jack.velocidad &&
           corraleros.Jack.tono > corraleros.Smith.tono){
               return true;
           }
           return false;
    },
    intervalo: setInterval(function(){

        corraleros.Mac.tono = Math.ceil(Math.random()*2);
        corraleros.Mac.velocidad = Math.ceil(Math.random()*2);
        corraleros.Mac.edad = Math.ceil(Math.random()*2);

        corraleros.Smith.tono = Math.ceil(Math.random()*2);
        corraleros.Smith.velocidad = Math.ceil(Math.random()*2);
        corraleros.Smith.edad = Math.ceil(Math.random()*2);

        corraleros.Jack.tono = Math.ceil(Math.random()*2);
        corraleros.Jack.velocidad = Math.ceil(Math.random()*2);
        corraleros.Jack.edad = Math.ceil(Math.random()*2);

        corraleros.Willy.tono = Math.ceil(Math.random()*2);
        corraleros.Willy.velocidad = Math.ceil(Math.random()*2);
        corraleros.Willy.edad = Math.ceil(Math.random()*2);

        if(corraleros.resultado()){
            clearInterval(corraleros.intervalo);
            console.log("Caballo de Mac: ",corraleros.Mac);
            console.log("Caballo de Smith: ",corraleros.Smith);
            console.log("Caballo de Jack: ",corraleros.Jack);
            console.log("Caballo de Willy: ",corraleros.Willy);
        }
    },1)
}


/*=============================================
CASO 3. LOS CUATRO PERROS. 

Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco. ¿Cuál de los cuatro perros come menos?.
=============================================*/

var perros = {
    galgo: 0,
    dogo: 0,
    alano: 0,
    podenco: 0,
    resultado: function(){
        if(perros.podenco > perros.galgo &&
           perros.alano > perros.galgo &&
           perros.dogo > perros.alano &&
           perros.alano > perros.podenco){
            return true;
        }
        return false;
    },
    intervalo: setInterval(function(){

        perros.galgo = Math.ceil(Math.random()*4)
        perros.dogo = Math.ceil(Math.random()*4)
        perros.alano = Math.ceil(Math.random()*4)
        perros.podenco = Math.ceil(Math.random()*4)

        if(perros.resultado()){
            clearInterval(perros.intervalo);
            console.log("Galgo: ", perros.galgo);
            console.log("Dogo: ", perros.dogo);
            console.log("Alano: ", perros.alano);
            console.log("Podenco: ", perros.podenco);
        }
    },10)
}

/*=============================================
CASO 4. SEIS AMIGOS DE VACACIONES. 

Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte; sabemos que Alejandro no utiliza el coche ya que éste acompaña a Benito que no va en avión. Andrés viaja en avión. Si Carlos no va acompañado de Darío ni hace uso del avión, podría Vd. decirnos en qué medio de transporte llega a su destino Tomás.
=============================================*/

/*=============================================
CASO 5. SILENCIO. 

Si Ángela habla más bajo que Rosa y Celia habla más alto que Rosa, ¿habla Ángela más alto o más bajo que Celia?
=============================================*/

var gritona = {
    angela: 0,
    rosa: 0,
    celia: 0,
    comparacion: function(){
        if(gritona.rosa > gritona.angela &&
           gritona.celia > gritona.rosa ){
               return true;
        }
        return false;
    },
    intervalo: setInterval(function(){
        
        gritona.angela = Math.ceil(Math.random()*3);
        gritona.rosa = Math.ceil(Math.random()*3);
        gritona.celia = Math.ceil(Math.random()*3);

        
        if(gritona.comparacion()){
            clearInterval(gritona.intervalo);
            console.log("Ángela: ", gritona.angela);
            console.log("Rosa: ", gritona.rosa);
            console.log("Celia: ", gritona.celia);
        }
        
    },10)
}