const fechaInicio = new Date("2023-03-12T15:01:00");
document.getElementById("fecha").textContent =
  fechaInicio.toLocaleDateString("es-ES");

function actualizarContador() {
  const ahora = new Date();
  let diff = ahora - fechaInicio;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* 🎵 Música */
const musica = document.getElementById("musica");
let sonando = false;

function toggleMusica() {
  if (sonando) {
    musica.pause();
  } else {
    musica.play();
  }
  sonando = !sonando;
}

/* 🌙 Modo día / noche */
function toggleModo() {
  document.body.classList.toggle("night");
  document.body.classList.toggle("day");
}

/* 💖 Corazones */
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
