(()=>{ //Esto se conoce como una función AutoInvocada o es la base del patron modulo de Js
    //Tipo de retorno de una función 

    const  sumar = (a:number, b:number) :number=>{
        return a+b;
    }

    const obtenrSalario = (): Promise<string> =>{
        return new Promise((resolve,reject)=>{
            resolve("Salario");
        })
    }

    obtenrSalario().then(a=>console.log(a));
})();