import colors from 'colors';
import { inquirerMenu, 
          pausa, 
          leerInput, 
          listadoTareasBorrar, 
          confirmar,
          mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';


const main = async () => {

  let opt='';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if(tareasDB){
    tareas.cargarTareasFromArray(tareasDB);
  }

  do{
    opt = await inquirerMenu(); //el await hace que se espere a la resolucion de la promesa que devuelve mostrarMenu()
    
    switch(opt){
      case '1':
        //crear opcion
        const desc = await leerInput('Descripción: ');
        console.log(desc);
        tareas.crearTarea(desc);
      break;

      case '2':
        tareas.listadoCompleto();
      break;

      case '3': //listar tareas completadas
        tareas.listarPendientesCompletadas();
      break;

      case '4': //listar tareas pendientes
        tareas.listarPendientesCompletadas(false);
      break;

      case '5': //completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
      break;

      case '6': //borrar
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if( id !== '0' ){
          const ok = await confirmar('Estas seguro?');
          if(ok){
            tareas.borrarTarea(id);
            console.log('Tarea borrada');
          }
        }     
      break;

    }

    guardarDB(tareas.listadoArr);

    await pausa();


  }while( opt !== '0' );


 // pausa();

}


main();