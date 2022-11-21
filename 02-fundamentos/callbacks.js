//setTimeout( function() {
//  console.log( 'Hola mundo' );
//}, 1000 );


const getUsuarioByID = ( id, callback ) => {
  const user = {
    id,
    nombre: 'Miau'
  };

  setTimeout( () => {
    callback( user );
  }, 1500 );
}

getUsuarioByID( 10, ( usuario ) => {
  console.log( usuario.id );
  console.log( usuario.nombre.toUpperCase() );
} );