(function(){ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js

  //Funciones: Parametros opcionales, obligatorios y por defecto.


  //Siempre se recomienda poner los parametros en el siguiente orden: 
  //Primero los Obligatios, despues los opcionales y de ultimos los por defecto.
  function activar(
      quien:string, 
      momento?: string,
      objeto:string ="batiseñal"
      ){

    if (momento){
        console.log(`${quien} activó la ${objeto} en la ${momento}`);
    }
    else {
        console.log(`${quien} activó la ${objeto}`);
    }
    
  }
    

  // Como se puede evidenciar en la invocación,  no es necesario enviar el parametros "objeto"
 //   activar("Camilo"); 
  
 // Si se envía el parametro se replaza por el valor por defecto
  activar("Camilo", "mañana", "Camara"); 
})();



