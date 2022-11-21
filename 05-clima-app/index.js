import dotenv from 'dotenv';
        dotenv.config();
import { inquirerMenu,
        leerInput,
        pausa,
        listarLugares } from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


console.log(process.env.MAPBOX_KEY);



const main = async () => {
  const busquedas = new Busquedas();
  let opt='';

  do{

    opt= await inquirerMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje
        const terminoBusqueda = await leerInput('Ciudad: ');

        //Buscar los lugares
        const lugares = await busquedas.ciudad(terminoBusqueda);

        //Seleccionar el lugar
        const idSeleccionado = await listarLugares(lugares);
        if( idSeleccionado==='0' ) continue; //si el id=0 (osea se cancela la busqueda) se vuelve a ejecutar el do desde el principio (sin esto al cancelar se produce un error)

        const lugarSeleccionado = lugares.find( lugar => lugar.id === idSeleccionado);
        
        //Guardar en DB
        busquedas.agregarHistorial(lugarSeleccionado.name);


        //Clima
        const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

        //Mostrar resultados
        console.clear();
        console.log('\nInformación del lugar\n'.green);
        console.log('Ciudad', lugarSeleccionado.name.green);
        console.log('Lat:', lugarSeleccionado.lat);
        console.log('Lng: ', lugarSeleccionado.lng);
        console.log('Temperatura: ', clima.temp);
        console.log('Mínima: ', clima.min);
        console.log('Máxima: ', clima.max);
        console.log('Como está el clima:', clima.desc.green);
      break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const indice = `${ i + 1 }.`.green;
          console.log(`${indice} ${lugar}`);
        });
      break;
    }

    await pausa();

  }while( opt !== 0 );


}

main();