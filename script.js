// Función para que J.A.R.V.I.S. salude con voz
function saludar() {
  const msg = new SpeechSynthesisUtterance("Hola, Uriel. Bienvenido al sistema yarbis (J.A.R.V.I.S.");
  msg.lang = "es-ES";
  msg.rate = 1;
  window.speechSynthesis.speak(msg);
}

// Función para mostrar la hora en el panel "Monitor"
function mostrarHora() {
  const screen = document.getElementById("screen");
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  screen.innerHTML = `<p>Hora actual: ${hora}</p>`;
}

// Actualizar la hora automáticamente cada segundo
setInterval(() => {
  const screen = document.getElementById("screen");
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  screen.innerHTML = `<p>Hora actual: ${hora}</p>`;
}, 1000);
