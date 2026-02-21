let ciudad = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"]
var maxima = [30, 28, 27, 29, 31]
let minima = [15, 14, 13, 16, 17]

for (let i = 0; i < ciudad.length; i++) {
    console.log("Ciudad: " + ciudad[i])
    console.log("La temperatura mínima de " + ciudad[i] + " es: " + minima[i] + "°C")
    console.log("La temperatura máxima de " + ciudad[i] + " es: " + maxima[i] + "°C")   
}