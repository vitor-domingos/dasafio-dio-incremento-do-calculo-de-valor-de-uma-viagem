let precoEtanol = 1.84

let precoGasolina = 5.58

let kmEmLitroEtanol = 3

let kmEmLitroGasolina = 2

let distanciaSpParaPr = 2083

let distanciaSpParaCe= 2876

let carroUtilizandoEtanolLitrosConsumidos = distanciaSpParaPr / kmEmLitroEtanol

let valorGastoEtanol = carroUtilizandoEtanolLitrosConsumidos * precoEtanol

let carroUtilizandoGasolinaLitrosConsumidos = distanciaSpParaCe / kmEmLitroGasolina

let valorGastoGasolina = carroUtilizandoGasolinaLitrosConsumidos * precoGasolina

if (carroUtilizandoEtanolLitrosConsumidos < carroUtilizandoGasolinaLitrosConsumidos) {
    console.log('O carro utilizando etanol gasta ' + carroUtilizandoEtanolLitrosConsumidos + ' litros, enquanto o carro utilizando gasolina gasta ' + carroUtilizandoGasolinaLitrosConsumidos + ' litros.');
} else {
    console.log('O carro utilizando gasolina gasta ' + carroUtilizandoGasolinaLitrosConsumidos + ' litros, enquanto o carro utilizando etanol gasta ' + carroUtilizandoEtanolLitrosConsumidos + ' litros.');
}if (valorGastoEtanol < valorGastoGasolina) {
    console.log('É mais vantajoso utilizar etanol. O carro utilizando etanol gasta ' + carroUtilizandoEtanolLitrosConsumidos + ' litros, enquanto o valor gasto é ' + valorGastoEtanol);
} else if (valorGastoEtanol > valorGastoGasolina) {
    console.log('É mais vantajoso utilizar gasolina. O carro utilizando gasolina gasta ' + carroUtilizandoGasolinaLitrosConsumidos + ' litros, enquanto o valor gasto é ' + valorGastoGasolina);
} else {
    console.log('Os gastos são iguais, pode-se escolher entre etanol ou gasolina.');
}