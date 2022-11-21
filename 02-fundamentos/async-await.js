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




const getEmpleado = ( id ) => {
  const empleado = empleados.find( ( e ) => e.id === id )?.nombre;

  return new Promise( (resolve, reject) => {
    (empleado)
      ? resolve(empleado)
      :reject (`No existe empleado con id ${id}`)
    
  } );

}

const getSalario = ( id ) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  return new Promise( (resolve, reject) => {
    (salario) 
    ? resolve(salario) 
    : reject (`No existe salario con id ${id}`)
  });
}


const getInfoUsuario = async (id) => {
  try{
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de ${salario}`;
  }catch(error){
    throw error;
  }
}

const id=5;

getInfoUsuario(id).then(msg=> {
  console.log('TODO BIEN!');
  console.log(msg);
}).catch( error => {
  console.log('TODO MAL');
  console.log(error);
});


