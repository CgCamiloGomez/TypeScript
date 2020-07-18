(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
    //Clases TypeScript
    
    // class Avenger{
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean,peleasGanadas:number){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;

    //     }
    // }

    // const avenger = new Avenger("Iroman","CAPI","Toni",true,5);

    // console.log(avenger);

    //otra manera de inicializar todas las propiedades es:
    class Avenger{
        // nombre: string;
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor(
            public nombre:string, //De esta menara creo he inicializo las propiedades
            public equipo:string, 
            public nombreReal:string, 
            public puedePelear?:boolean, //Valor opcional
            public peleasGanadas:number=0 //Valor por defecto
            ){}
    }

    const avenger = new Avenger("Spiderman","Capi","Peter");

    console.log(avenger);

})();