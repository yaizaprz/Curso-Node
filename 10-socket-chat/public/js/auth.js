
const miFormulario = document.querySelector('form');

const url = (window.location.hostname.includes('localhost'))
    ?'http://localhost:8080/api/auth/'
    :'https://restserver-curso-node-yaiza.herokuapp.com/api/auth/'
         

miFormulario.addEventListener('submit', event => {
  event.preventDefault(); //asi evitamos hacer un refresh del navegador cuando tocamos el boton con el submit
  const formData = {};

  for(let el of miFormulario.elements){
    if(el.name.length>0){ //como el boton no tiene name, con esta condicion lo estamos ignorando
      formData[el.name]=el.value;
    }
  }
  
  fetch( url + 'login', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(resp => resp.json())
  .then( ({msg, token}) => { 
    if(msg){
      return console.error(msg);
    }
    localStorage.setItem('token', token);
    window.location = 'chat.html';
  } )
  .catch( err => { console.log(err)});

});


function handleCredentialResponse(response) {

//Google Token : ID_TOKEN
//console.log('id_token', response.credential);

const body = { id_token: response.credential };

fetch(url + 'google', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(body)
}).then( resp => resp.json() ).then(resp => {
                                          //console.log(resp.token);
                                          localStorage.setItem('token', resp.token);
                                          window.location = 'chat.html';
                                          //localStorage.setItem('email', resp.usuario.correo);
                                        }).catch(console.warn);

}


const button = document.getElementById('google_signout');
button.onclick = () => {
console.log(google.accounts.id);
google.accounts.id.disableAutoSelect();

google.accounts.id.revoke( localStorage.getItem('email'), done => {
localStorage.clear();
location.reload();
} )
}