const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"];


let nombre = ``
for (let i = 0; i < nombres.length; i++) {
    nombre = nombre + `<li>${nombres[i]}</li>`
    
}
console.log(nombre)


