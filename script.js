const btnStart = document.getElementById("btnStart");
const btnCart = document.getElementById("btnCart");
const btnNext = document.getElementById("btnNext");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const progressFill = document.getElementById("progressFill");
const bgMusic = document.getElementById("bgMusic");
const themeToggle = document.getElementById("themeToggle");
const stateMsg = document.getElementById("state-message");
const resultTxt = document.getElementById("result-text");

// 1. Cambio de Tema (Oscuro/Claro)
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
});

// 2. Control manual de música
document.getElementById("musicToggle").addEventListener("click", function () {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.textContent = "volume_up";
  } else {
    bgMusic.pause();
    musicIcon.textContent = "volume_off";
  }
});

// 3. Lógica principal al dar click en "Ver"
btnStart.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");

  // INICIAR MÚSICA
  bgMusic.play().catch((error) => {
    console.log("Error al reproducir audio:", error);
  });

  // Iniciar Animación
  progressFill.classList.add("animate-progress");

  // Al finalizar la carga (5 segundos)
  setTimeout(() => {
    stateMsg.innerHTML = "¡Enviado!";

    // EFECTO CONFETI AUTOMÁTICO
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8a2be2", "#ffffff", "#ffd700"],
    });
  }, 5000);

  // Texto final
  setTimeout(() => {
    stateMsg.style.visibility = "hidden";
    resultTxt.innerHTML = "¡Recibiste un abrazo!";
    btnCart.classList.remove("hidden");
  }, 6000);
});

btnCart.addEventListener("click", () => {
  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
});
btnNext.addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
});

btnNext2.addEventListener("click", () => {
  screen4.classList.add("hidden");
  screen5.classList.remove("hidden");
});
