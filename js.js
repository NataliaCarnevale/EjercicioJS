//EJERCICIO 1: Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6
//1
//12
//123
//1234
//12356

//para valor 3
//1
//12
//123

function piramide(numero) {
  for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += j;
    }
    console.log(fila);
  }
}

  //Primero, la función piramide recibe un número () como entrada. Después usa 2 bucles for que constuyen la pirámide de numeros.
  //El primer bucle comienza en 1 y termina la iteracion cuando llega al número ingresado, con este bucle, el otro bucle for sabe cuantas filas hay que construir para la piramide.
  //El segundo bucle for como dijimos hace las filas, empieza en 1 y termina cuando llega a la fila actual. Una vez que este bucle agrega todos los numeros
  //a la fila, imprime con console.log.
  




  //EJERCICIO 2 .Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

  function arrayCoincide(array1, array2) {
    let resultado = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          resultado.push(array1[i]);
        }
      }
    }
    return resultado;
  }

  //Esta funcion recibe dos array de argumento y devuelve un array (resultado) con los elementos que coinciden entre estos,
  //los bucles for son para comparar los elementos de array1 y array2. Si algun elemento coincide se agrega al resultado usando push. 



  

// 3)
// 3.1) Dado el siguiente objeto

 let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
 }

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

 


// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal

// agregarProducto(nombre, precio, unidades) {
//     // Completar aca...
// }



  agregarProducto(nombre, precio, unidades) {
    const nuevoProducto = new Producto(nombre, precio);
    nuevoProducto.unidades = unidades;
    this.productos.push(nuevoProducto);
    this.montoTotal += precio * unidades;
  }


// Ej:
// agregarProducto("Azucar", 5, 2);

// //Resultado esperado
// carrito = {
//     montoTotal: 20,
//     productos: ["Leche", "Azucar"]
// }


// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”

  agregarProducto(nombre, precio, unidades) {
    const itemExiste = this.productos.find(producto => producto.nombre === nombre);
    if (itemExiste) {
      itemExiste.unidades += unidades;
      console.log(`Ya existe ${itemExiste.nombre} con ${itemExiste.unidades} unidades.`);
    } else {
      const nuevoProducto = new Producto(nombre, precio);
      nuevoProducto.unidades = unidades;
      this.productos.push(nuevoProducto);
    }
    this.montoTotal = this.productos.reduce((total, producto) => total + producto.precio * producto.unidades, 0);
  }
}
