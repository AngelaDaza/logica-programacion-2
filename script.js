// Seleccionando el input del html para poder manipularlo 
const btnFahrenheit = document.querySelector("#fahrenheit");
const btnKelvin = document.querySelector("#kelvin");
const inputCelsius = document.querySelector("#celsius").value;
const mostrar = document.querySelector(".resultado span");

// Agregar un evento para cuando se precione el boton Fahrenheit
resultado = 0;

btnFahrenheit.addEventListener("click", function () {
    resultado = (inputCelsius * 1.8) + 32;
    mostrar.textContent = resultado;
});

btnKelvin.addEventListener("click", function () {
    resultado = inputCelsius + 273.15;
    mostrar.textContent = resultado;
});



