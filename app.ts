(()=>{

  // Uso de Let y Const
  let nombre:string  = 'Ricardo Tapia';
  let edad:number = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };

interface SuperHerore{
  nombre: string,
  artesMarciales:string[]
}

  // Cree una interfaz que sirva para validar el siguiente objeto
  const batman:SuperHerore = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble =(a:number, b:number ):number =>(a + b) * 2
  

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = (nombre:string, poder?:boolean, arma:string="arco" ) => {
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo{
    
    constructor (public base:number, public altura:number){ }

    getArea = ():number => this.base * this.altura

  }

  const rectangulo = new Rectangulo(10,5);

console.log(rectangulo.getArea());

})();