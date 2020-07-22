// capturar evento de submit do formulário
// parar evento
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  /*  if (imc >= 39.9) {
        return nivel [5];
    } 
    if (imc >= 34.9) {
        return nivel [4];
    } 
    if (imc >= 29.9) {
        return nivel [3];
    } 
    if (imc >= 24.9) {
        return nivel [2];
    } 
    if (imc >= 18.5) {
        return nivel [1];
    }  
    if (imc > 18.5) {
        return nivel [0];
    } */

    if (imc >= 39.9) return nivel [5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5)  return nivel [0];
}

function getIMC (peso, altura) {
    const imc = peso / (altura * altura);
    //duas casas decimais
    return imc.toFixed(2);
}

function criaP (className) {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    
    const p =criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('erro');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}

/*let peso = 46.0;
let altura = 1.60;

let imc = (peso / (altura*2));

console.log (imc);

if (imc < 18.5) {
    console.log ('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log ('Peso normal');
} else if (imc >= 25 && imc <= 29.9) {
    console.log ('Sobrepeso');
} else if (imc >= 30 && imc <= 34.9) {
    console.log ('Obesidade grau 1');
} else if (imc >= 35 && imc <= 39.9) {
    console.log ('Obesidade grau 2');
} else if (imc > 40) {
    console.log ('Obesidade grau 3');
}

*/