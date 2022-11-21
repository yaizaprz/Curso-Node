const empleados = [ {
    id: 1,
    nombre: 'Stitch'
  },
  {
    id: 2,
    nombre: 'Floky'
  },
  {
    id: 3,
    nombre: 'Simba'
  }
];

const salarios = [ {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];


const getEmpleado = ( id, callback ) => {
  const empleado = empleados.find( ( e ) => e.id === id );

  if ( empleado ) {
    callback( null, empleado.nombre ); //no hay error, hay empleado
  } else {
    callback( `Empleado con id ${id} no existe` );
  }

}

const getSalario = ( id, callback ) => {
  const salario = salarios.find( ( s ) => s.id === id )?.salario;

  if ( salario ) {
    callback( null, salario ); //no hay error, hay salario
  } else {
    callback( `No existe salario para el id ${id}` );
  }

}

const id = 3;

getEmpleado( id, ( error, empleado ) => {
  if ( error ) {
    console.log( 'ERROR!!!' );
    return console.log( error );
  }

  getSalario( id, ( error, salario ) => {
    if ( error ) {
      return console.log( error );
    }
    console.log( 'El empleado:', empleado, 'tiene un salario de:', salario );
  } );

} );