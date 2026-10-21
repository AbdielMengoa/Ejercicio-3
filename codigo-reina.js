let nivelIra = 0;

function sentenciarReina() {
  const falta = document.getElementById('falta').value;
  const textoReina = document.getElementById('textoReina');
  const barraIra = document.getElementById('iraBarra');
  const porcentajeIra = document.getElementById('porcentajeIra');
  const tarjeta = document.getElementById('tarjetaReina');

  let incremento = 0;
  let sentencia = "";

  switch (falta) {
    case 'tarde':
      incremento = 25;
      sentencia = "¡Un segundo de retraso! ¡Que le corten la cabeza!";
      break;
    case 'erizo':
      incremento = 30;
      sentencia = "¡El erizo huyó! ¡Que le corten la cabeza al jugador!";
      break;
    case 'sonrisa':
      incremento = 40;
      sentencia = "¡Ese gato se burla! ¡Que le corten la cabeza a todos!";
      break;
    case 'tartas':
      incremento = 50;
      sentencia = "¡¿ROBAR TARTAS?! ¡EJECUCIÓN INMEDIATA!";
      break;
  }

  nivelIra = Math.min(100, nivelIra + incremento);

  // Actualizar UI en tiempo real
  barraIra.style.width = nivelIra + "%";
  porcentajeIra.innerText = nivelIra + "%";
  textoReina.innerText = sentencia;

  // Animación de temblor
  tarjeta.classList.remove('sacudir');
  void tarjeta.offsetWidth;
  tarjeta.classList.add('sacudir');

  if (nivelIra >= 100) {
    setTimeout(() => {
      alert("¡La baraja completa se lanza en picado sobre ti! ¡Despiertas del sueño!");
      nivelIra = 0;
      barraIra.style.width = "0%";
      porcentajeIra.innerText = "0%";
      textoReina.innerText = "\"¡No sois más que una baraja de cartas!\", exclama Alicia.";
    }, 400);
  }
}

document.getElementById('btnReina').addEventListener('click', sentenciarReina);