//VARIABLES
const CLAVE = "carrito"
const carritoVacio = [
    { "nombre": "vacio1", "cantidad": 0 },
    { "nombre": "vacio2", "cantidad": 0 },
    { "nombre": "vacio3", "cantidad": 0 },
    { "nombre": "vacio4", "cantidad": 0 },
    { "nombre": "vacio5", "cantidad": 0 }
]

const objVacio = { "nombre": "", "cantidad": 0 }

//EVENTOS
document.addEventListener("submit", (ev) => {
    ev.preventDefault()
    //console.log(ev.target)
    //console.log(ev.target.producto.value)

    //recuperar array de objetos (puede traer cosas vacias)
    let carritoCompra = JSON.parse(localStorage.getItem(CLAVE) || "[]")
    console.log("carritocompra: "carritoCompra)
    //añadir/retirar objeto de formulario

    let producto = ev.target.producto.value;

    //juntar producto y carrito
    let respuesta = insertarObjeto(producto, carritoCompra)

    //guardar array de objetos
    console.log("respuesta = " + respuesta)
})

//evento click para borrar
document.addEventListener("click", (ev) => {
    //obtener id elemento clickado
    //llamara a eliminar pasandole el ID
    //pintarTabla()
})



//FUNCIONES

/*Recoger y validar dato del formulario */
const recuperarDato = () => {
    //recoger dato del formulario ()

    //si el dato no es valido => mensaje de error alert(Corregir texto))
    //si dato valido => almacenar dato

    //insertarObjeto(dato)
}

//crear funcion q almacene en el local storage
const anadirLocalStorage = () => {
    //añadir
}

//recuperar datos del localStorage
const leerLocalStorage = () => {
    // returnna el obj JSON del local

    //const data=si el clocalstorage== null que sea un []
}

//
const insertarObjeto = (dato) => {

    const data = leerLocalStorage()

    //buscar dato en data (find) 
    //SI existe => cantidad = cantidad +1
    /*
    NO existe => crar nuevpo objeto
                objet {
                    "id":date.now,
                    "nombre": dato,
                    "cantidad":1
                }
    */
    //crear array nuevo que tenga lo q tenia data (spread) y el nuevo objeto
    //llamar a guardar en el localstrage con el nuevo array

}

//funcion pintarTabla
const pintarTabla = () => {
    const data = leerLocalStorage()
    //recorrer data y pintar la tabla
    //crear fila por cada elemento y tendra : id, nombre, cantidad y boton eliminar (contiene id del producto asociado) 
}

//eliminar producto

const eliminarProducto = () => {
    //capturar id del boton pulsado
    //leer del localStorage
    //buscar en el localStorage que tenga el id
    //comprobar si cantidad > 1 => mayor a 1, reducir cantidad. menor o igual, qitar elemento del localStorage
    //anadir a localStorage
}


//LLAMADAS A FUNCIONES(SI HACE FALTA)
pintarTabla()