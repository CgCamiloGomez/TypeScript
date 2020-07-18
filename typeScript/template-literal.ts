(function(){ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js

    function getFechaNacimeinto(edad:number){
        return anoActual.getFullYear() - edad;
    }
    //Template Literales
    const nombre = 'Camilo';
    const apellido = 'Gomez';
    const edad = 25;
    let anoActual:Date = new Date();

    //Si queremos mostar todo esto en pantalla se puede realizar de la siguiente manera

    const mensaje = "Hola "+nombre+" "+apellido+" "+ edad;


    // O si no utilizamos los template literales de la sigueinte manera
    const mensajeconTemplateLiterales = `Hola ${nombre} 
${apellido}
${edad} 
Su fecha de nacimiento es: 
${getFechaNacimeinto(edad)} `

    console.log(mensajeconTemplateLiterales);

    

})();



