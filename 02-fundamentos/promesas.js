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



const id=1;

//getEmpleado(id).then(empleado => console.log(empleado)).catch(error => console.log(error));

//getSalario(id).then(salario => console.log(salario)).catch(error => console.log(error));

let nombre;

getEmpleado(id)
.then( empleado => {
  nombre = empleado;
  return getSalario(id)
} )
.then (salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
.catch( error => console.log(error));




