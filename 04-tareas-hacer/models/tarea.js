import { v4 as uudiv4 } from 'uuid'; //los dos puntos son para renombrar

class Tarea{
  id = '';
  desc = '';
  completadoEn = null;

  constructor( desc ){
    this.id = uudiv4(); //esto genera un identificador unico de manera sincrona
    this.desc = desc;
    this.completadoEn = null;
  }

}



export { Tarea };