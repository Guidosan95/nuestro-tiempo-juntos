document.addEventListener("DOMContentLoaded", function () {

  /* ==============================
     📅 FECHA DE INICIO
  ============================== */

  const fechaInicio = new Date("2023-03-12T15:01:00");

  // Mostrar fecha en formato 12/03/2023
  const dia = String(fechaInicio.getDate()).padStart(2, "0");
  const mes = String(fechaInicio.getMonth() + 1).padStart(2, "0");
  const ano = fechaInicio.getFullYear();

  document.getElementById("fecha").textContent = `${dia}/${mes}/${ano}`;


  /* ==============================
     ⏳ CONTADOR EXACTO
  ============================== */

  function actualizarContador() {
    const ahora = new Date();

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }

    if (minutos < 0) {
      minutos += 60;
      horas--;
    }

    if (horas < 0) {
      horas += 24;
      dias--;
    }

    if (dias < 0) {
      const ultimoMes = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        0
      ).getDate();
      dias += ultimoMes;
      meses--;
    }

    if (meses < 0) {
      meses += 12;
      anos--;
    }

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }

  setInterval(actualizarContador, 1000);
  actualizarContador();


  /* ==============================
     🎵 MÚSICA
  ============================== */

  const musica = document.getElementById("musica");
  let sonando = false;

  window.toggleMusica = function () {
    if (!musica) return;

    if (sonando) {
      musica.pause();
    } else {
      musica.play();
    }
    sonando = !sonando;
  };


  /* ==============================
     🌙 MODO DÍA / NOCHE
  ============================== */

  window.toggleModo = function () {
    document.body.classList.toggle("night");
    document.body.classList.toggle("day");
  };


  /* ==============================
     💖 CORAZONES
  ============================== */

  const heartsContainer = document.querySelector(".hearts");

  if (heartsContainer) {
    setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
      heart.style.position = "absolute";

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, 300);
  }

});