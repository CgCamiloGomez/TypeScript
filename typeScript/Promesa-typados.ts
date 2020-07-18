(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
    //Promesas y typado
    
    // const retirarDinero = (dineroAretirar:number):Promise<number> De esta manera indico que la función va a retornar una promesa que va a resolver un valor de tipo Number
    const retirarDinero = (dineroAretirar:number):Promise<number>=>{
        let dineroDisponible=1000;
        return new Promise((resolve,reject)=>{
    
            if (dineroAretirar > dineroDisponible){
                reject('El monto ingresado supera el vlor disponible');
            }
            else {
                dineroDisponible -= dineroAretirar;
                resolve(dineroDisponible);
            }
        })
    }
    // Si se hace el llamado de la función de esta manera no funciona porque 
    //no estoy recibiendo el retorno de la promesa 
    retirarDinero(5000)
    .then((dineroDisponible)=>{
        console.log(`Su dinero disponible es: ${dineroDisponible}`)
    })
    .catch((error)=>{
        console.warn(error);
        
    });
    
        
    })();
    
    
    
    
