(function(){ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js

    //Funión convencional
    const miFuction = function(a: string){
        return a.toUpperCase();
    }

    //Se puede hacer de esta manera
    const miFuctionF = (a:string) => {
        return a.toUpperCase();
    }

    //Pero si la función solo tiene una linea de codigo se podrías hacer asi:
    const miFuctionFSoloLinea = (a:string) => a.toUpperCase();


    const sumarN = function(a:number, b:number){
        return a + b;

    }

    const sumarF = (a: number, b:number) => a+b;
 
    //Creo un objeto con una propiedad y una función
    //-------------------------------------------------------------
       /* const hulk ={
            nombre: 'Hulk',
            smash(){
                setTimeout(function(){ //=> a esta función hace referencia this
                    //el objeto "this" esta apuntando al contexto de la función donde se invoca
                    console.log(`${this.nombre} smash!!!`) 
                },1000);            
            }
        } 
        */
    //Si se ejecuta de esta manera el resultado sera "undefined smash!!!"
    //-------------------------------------------------------------

// Pero si se ejcuta con una función de flecha
    const hulk ={
        nombre: 'Hulk',
        smash(){
            setTimeout(()=>{
                //el objeto "this" ya apunta al objeto "hulk"
                console.log(`${this.nombre} smash!!!`) 
            },1000);            
        }
    } 
// ya la salida sería "Hulk smash!!!"

    //Invoco la función
    hulk.smash();
    // console.log(miFuction("convencional"));
    // console.log(miFuctionF("flecha"));
    // console.log(miFuctionFSoloLinea("flechasololinea"));
    // console.log(sumarN(2,5));
    // console.log(sumarF(3,5));
})();



