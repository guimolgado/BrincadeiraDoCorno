alert("oiiii");

let relogin = document.querySelector("#watch");
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function init() {
    reloginn();
    intervalo = setInterval(reloginn, 1000);
}

const pause = () => {
    clearInterval(intervalo)
}

const clearAll = () => {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    relogin.innerHTML = "00:00:00"

}

const digitZero = (digit) => { 
if(digit < 10) {
    return `0${digit}`
} else {
    return digit
}

}

function reloginn() {
    segundos++;

    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    relogin.innerHTML =
    digitZero(horas) + ":" + digitZero(minutos) + ":" + digitZero(segundos);
}
