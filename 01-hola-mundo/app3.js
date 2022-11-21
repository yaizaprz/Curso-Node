console.log( 'Inicio de programa' );
setTimeout( () => {
  console.log( 'Primer Timeout' );
}, 3000 ); //3000ms= 3s que tarda en ejecutar la funcion que esta dentro de las llaves


setTimeout( () => {
  console.log( 'Segundo Timeout' );
}, 0 );


setTimeout( () => {
  console.log( 'Tercer Timeout' );
}, 0 );




console.log( 'Fin de programa' );