const btnCalcular = document.querySelector('#btnCalcular');
const calcularImc = () => {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('#resultado');
    const imagen = document.querySelector('#imagen');
    const imc = parseFloat(peso.value) / (parseFloat(altura.value )*parseFloat(altura.value));
     console.log(imc.toFixed(2)); //toFixed(cantidad de decimales que quiero mostar)
    console.log(Math.round(imc)); //redondea al numero entero mas proximo
    if(imc.toFixed(2)<18.5){
        resultado.textContent = imc.toFixed(2)
        imagen.src = './img/BajoPeso.png'
    } else if (imc.toFixed(2)<24.9){
        resultado.textContent = imc.toFixed(2)
        imagen.src = './img/Normal.png'
    }else if(imc.toFixed(2)<34.9){
        resultado.textContent = imc.toFixed(2)
        imagen.src = './img/Obeso.png'
    }else{
        resultado.textContent = imc.toFixed(2)
        imagen.src = './img/Obeso.png'
    }
}

btnCalcular.addEventListener('click', calcularImc);

const btnBorrar = document.querySelector('#btnBorrar');

const borrar = () => {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('#resultado');
    const imagen = document.querySelector('#imagen');
    peso.value = "";
    altura.value = "";
    resultado.textContent = "";
    imagen.src ="";
}
 btnBorrar.addEventListener('click', borrar)
 
// esta es otra forma de limpiar los campos mas optima sin tanta linea
 const limpiar = () => {
    const peso = document.querySelector('#peso').value = ""
    const altura = document.querySelector('#altura').value = ""
    const resultado = document.querySelector('#resultado').textContent = ""
    const imagen = document.querySelector('#imagen').src = ""
 }