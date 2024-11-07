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