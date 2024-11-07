function cambiarTitulo(){
    console.log('desde la funcion cambiar titulo')
    //traer mi titulo h1
    // const tituloPrincipal = document.getElementsByTagName('h1')
    const tituloPrincipal = document.querySelector('h1')
    console.log(tituloPrincipal);
    // tituloPrincipal.innerText = 'Hola mundo 🌍'
    tituloPrincipal.innerHTML = '<b>Hola</b> mundo 🌍'
    tituloPrincipal.className = 'text-info display-4'
    console.log(tituloPrincipal)
    // const parrafos = document.getElementById('parrafoDestacado')
    const parrafos = document.querySelector('#parrafoDestacado')
    console.log(parrafos)
    // const botones = document.getElementsByClassName('btn-outline-info')
    const botones = document.querySelectorAll('.btn')
    console.log(botones)
}

function crearParrafo(){
    //1- creo el elemento nuevo
    const parrafoNuevo = document.createElement('p'); //<p>sdfsdfsdf</p>
    //2- preparar el parrafo
    parrafoNuevo.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam veniam, sit, placeat natus quasi officiis esse facilis nisi nesciunt magnam iure ducimus quaerat. Vitae possimus blanditiis aliquam fuga suscipit repellendus qui ad rerum aut nam unde dolore, eos impedit nisi illum enim velit optio molestiae nulla expedita beatae culpa ipsa.'
    parrafoNuevo.className = 'lead' //vemos luego una alternativa de className
    //3- insertar elemento en el DOM
    const contenedorPadre = document.getElementById('contenedorPadre')
    // contenedorPadre.appendChild(parrafoNuevo) //agrega el nodo al final (ultimo hijo);
    // contenedorPadre.prepend(parrafoNuevo)
    contenedorPadre.insertBefore(parrafoNuevo, btnVermas)
}

//1- buscar el boton ver mas
const btnVermas = document.querySelector('.btn-outline-info')
console.log(btnVermas)

//2- agregar el evento
//el segundo argumento si la funcion no tiene argumentos va solo el nombre, caso contrario hay que usar una funcion anonimas
// btnVermas.addEventListener('click', function (){ crearParrafo('hola')})
// btnVermas.addEventListener('click', ()=> crearParrafo('hola'))
btnVermas.addEventListener('click', crearParrafo)