const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const NivelImc = calcNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${NivelImc})`;

  setResultado(msg, true);
});

function calcNivelImc(imc) {
  const nivelImc = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivelImc[5];
  if (imc >= 34.9) return nivelImc[4];
  if (imc >= 29.9) return nivelImc[3];
  if (imc >= 24.9) return nivelImc[2];
  if (imc >= 18.5) return nivelImc[1];
  if (imc < 18.5) return nivelImc[0];
}
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaParagrafo() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const paragrafo = criaParagrafo();

  if (isValid) {
    paragrafo.classList.add("paragrafo-resultado");
  } else {
    paragrafo.classList.add("bad");
  }

  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}
