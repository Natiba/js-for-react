// Programacion funcional:
// FUNCTIONS
// Una funcion dentro de otra

function hello() {
  return function () {
    return "hola mundo";
  };
}

console.log(hello()());
// aca debo llamar al la funcion pero, agregar otro parentesis para llamar a la de andentro, sino, me muestra la 'funcion' insitu.

function helloName(name) {
  return "hola " + name;
}

console.log(helloName("Ryan"));

// Para evitar poner un if para ver si algun valor es 'undefined', se lo puedo poner directamente en el parametro.
// Por ej. le digo q x e y son igual a 0 u otro numero, y eso no modifica en nada los resultados luego.
function add(x = 2, y = 0) {
  if (y === undefined) {
    y = 0;
  }
  return x + y;
}

console.log(add(20, 30)); // da 50
console.log(add()); // da 2

// OBJECTS

const user = {
  name: "Pepper",
  lastname: "Pots",
  age: 34,
  adress: {
    country: "Usa",
    city: "New York",
    street: "Main Street 123",
  },
  friends: ["Peter", "Tony"],
  active: true,
  sendMail: function () {
    return "sending email...";
  },
  // esto tambien se puede escribir asi:
  sayHello() {
    return "Say hello";
  },
};

console.log(user); // me muestra todo el objeto
console.log(user.name); // Pepper todo
console.log(user.adress); // {objeto adress}
console.log(user.active); // true
console.log(user.sendMail()); // sending mail...
console.log(user.sayHello()); // Say hello

// SHORT HAND PROPERTY NAMES

const name = "laptop";
const price = 3000;

const newProduct = {
  name: name,
  price: price,
};

console.log(newProduct); // {name: 'laptop', price: 3000}
console.log(newProduct.name); //laptop
console.log(newProduct.price); //laptop

//Pero puedo hacer lo mismo sin poner name: name.  Asi:

const newProduct2 = {
  name,
  price,
};

console.log(newProduct2); // {name: 'laptop', price: 3000}

// Y me ahorre palabras!!

// MANIPULACION DEL DOM

const title = document.createElement('h1');
title.innerText = 'Hola Mundo'; //

console.log(title); // h1

const button = document.createElement('button')
button.innerText = 'click'

// Event Handlers (manejadores de eventos)

button.addEventListener('click', function() {
    title.innerText = 'Texto actualizado con JS'
    alert('Se realizo un click que')
    console.log('Hola mundo')
})

document.body.append(title)
document.body.append(button)

// DESTRUCTURING

const users = {
    name: 'Joe',
    age: 22
}

function printInfo(users) {
return '<h1>Hola ' + users.name + '</h1>' 
}

console.log(printInfo(users)) // <h1>Hola Joe</h1>