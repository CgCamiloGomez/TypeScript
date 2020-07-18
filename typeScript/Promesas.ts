(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
//Promesas
//Las promesas nos sirven para ejecutar mi codigo, sin bloquear el codigo dee mi aplicación

console.log('Inicio');

// Resolve es donde se retorna si el consumo sale bien y Reject es lo que retorna si el consumo sale mal
//Declaración de la promesa
const prom1 = new Promise((resolve, reject)=> {  
    setTimeout(()=>{
        reject("Se termino el TimeOut")
    },1000)
});

//Se dispara, apenas se ejecuta la promesa
prom1
.then(mensaje=>console.log(mensaje)) //then lo que se ejecuta si el codigo sale bien
.catch (err=>console.exception(err)); //catch lo que ejecuta si la promesa sale mal 

console.log('Fin');
})();



