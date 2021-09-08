const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"];

const lista = document.querySelector(".lista")
let nombre = ` `
for (let i = 0; i < nombres.length; i++) {
 nombre = nombre + `<li>${nombres[i]}</li>`
}

lista.innerHTML = nombre

