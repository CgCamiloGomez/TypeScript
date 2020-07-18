(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
    //Interfaces TypeScript
    
    //Son las reglas que  queremos que cumple un objeto para que lo utilicen 
    //como un tipo. Es como crar un tipo de dato
    //Permite asegurar que los objetos que cree la persona 
    //tengan las misma estructura del objeto que estoy esperando recibir
    
    //Definición de mi interfaz
    interface SuperHeroe{
        nombre:string; 
        edad: number;
        poder?:string //Las propiedades tambien pueden ser opcionales
    }
    
    //Función que recibe como paraetro un "heroe" de tipo "SuperHeroe"
    const enviarAMision = (heroe:SuperHeroe)=>{
        console.log(`El super heroe ${heroe.nombre}`);
    }
    
    //Creación del objeto "Wolverine" de tipo "SuperHeroe"
    const Wolverine:SuperHeroe = { // No genera error porque la segunda propiedad es 
        nombre: 'Logan',
        edad: 45
    }
    
    //Llamado a la función y envío del objeto "Wolverine" creado de tipo "SuperHeroe"
    enviarAMision(Wolverine);
        
    })();