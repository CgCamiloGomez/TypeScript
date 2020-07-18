(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
    //Desestructuración de objetos y arreglos
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Super Fuerza'
    }

//de esta forma creo el arrego y le asigno los valores
    const ArregloAvengers = [] = ["Thor", "Iroman", "Adman"]


//Se hace para extraer datos de objetos y arreglos

    //Desestruturo el objeto
const {nombre, clave, poder} = avenger; //El objeto se desestrutura con las llaves {}
//Dentro de las llaves van los nombres de las varibales en las que voy a almacenar las propiedades del objeto 


//Desestruturo el arreglo 
const [Thorcito, Iromanta, Hormiga] = ArregloAvengers; //El arreglo se desestrutura con las llaves []
//Dentro de las llaves van los nombres de las varibales en las que voy a almacenar las propiedades del arreglo 

console.log(Thorcito);
console.log(Iromanta);
console.log(Hormiga);

//Desestruturo el arreglo 

    console.log(nombre);
    console.log(clave);
    console.log(poder);


    //Tambien se puede hacer con los argumentos de una función

    const extraer = ( [superuno,superdos, supertres]: string[] ) => {
        console.log(superuno);
        console.log(superdos);
        console.log(supertres);
    }

    extraer(ArregloAvengers);

})();



