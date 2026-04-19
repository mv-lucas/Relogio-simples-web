let hora = document.getElementById('hr')
let minuto = document.getElementById('min')
let segundo = document.getElementById('sec')

function mostrar() {
    let data = new Date()
    let hr = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    hora.innerHTML = hr.toString().padStart(2, '0')
    minuto.innerHTML = min.toString().padStart(2, '0')
    segundo.innerHTML = sec.toString().padStart(2, '0')
}

setInterval(mostrar, 1000)
