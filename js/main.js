//VARIABLES
const CLAVE = "carrito"
const formulario = document.querySelector("#anadirProducto")

//EVENTOS
document.addEventListener("submit", (ev) => {
    ev.preventDefault()
    //recuperar array de objetos (puede traer cosas vacias)
    const data = leerLocalStorage()
    //recuperar objeto añadido al formulario
    recuperarDato()

    //evento click para borrar
})

document.addEventListener("click", (ev) => {
    //obtener id elemento clickado

    //llamara a eliminar pasandole el ID

    //pintarTabla()
})

//FUNCIONES

/*Recoger y validar dato del formulario */
const recuperarDato = () => {
    //recoger dato del formulario ()
    let cadena = formulario.producto.value;
    // console.log(cadena)
    //si el dato no es valido => mensaje de error alert(Corregir texto))


    if (cadena == "") {
        alert("Escribe algo para completar el proceso.")
        return
    }
    //si dato valido => almacenar dato 
    insertarObjeto(cadena)
}

//crear funcion q almacene en el local storage
const anadirLocalStorage = (data) => {
    //añadir
    console.log("para añadir a localStorage")
    console.log(data)
    localStorage.setItem(CLAVE, JSON.stringify(data))
}

//recuperar datos del localStorage
const leerLocalStorage = () => {
    // retorna el obj JSON del local
    let cadena = localStorage.getItem(CLAVE)

    if (cadena == "") {
        console.log("retornando []")
        return []
    }

    let retorno = JSON.parse(cadena)
    return retorno
}

//insertar objeto en array
const insertarObjeto = (dato) => {
    let data = leerLocalStorage()
    //buscar dato en data (find) 
    let encontrado = data.find(producto => {
        producto == dato
        //SI existe => cantidad = cantidad +1
        producto.cantidad++
        return producto
    })

    // NO existe => crar nuevo objeto 

    let nuevoProducto = {}
    if (encontrado === undefined) {
        nuevoProducto = {
            "id": Date.now,
            "nombre": dato,
            "cantidad": 1
        }
    }
    //crear array nuevo que tenga lo q tenia data (spread) y el nuevo objeto
    let nuevoData = [...data, nuevoProducto]
    console.log("valores de data")
    console.log(data)

    console.log("valor de objeto")
    console.log(nuevoProducto)

    console.log("data + objeto")
    console.log(nuevoData)
    //llamar a guardar en el localstrage con el nuevo array
    anadirLocalStorage(nuevoData)

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
//pintarTabla()