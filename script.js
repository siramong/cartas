const msgs = [
  "Hola! Pues, luego de casi 400 lineas de código, esto me salió...",
  "Ha pasado ya nuestro primer mes cumplido como pareja",
  "Talvez no pudimos salir para celebrarlo, pero aqui estamos, juntos, a través de una pantalla, pero juntos",
  "Mediante esta Web, quiero decirte algunas cositas para recordar todo lo que hemos logrado hasta hoy",
  "Realmente, cada día me doy más cuenta lo mucho que te amo, y lo mucho que te quiero junto a mi lado por siempre",
  "Nuestra relación, talvez no la más perfecta, pero si la más bonita, que yo diría qué hasta de película",
  "Te recuerdo que siempre siempre siempre mi vida, seremos un Equipo, en las Buenas, en las Malas, y en las Peores, sin importar lo que pase",
  "Todo lo que nos pasa, lo podemos arreglar, por más horrible que esté la situación, o el problema, lo podemos arreglar mi amor, siempre siempre",
  "Ambos aprendemos el uno del otro, cada día un poquito más que ayer",
  "Nuestro amor, llega a ser tan recíproco por ambos, que lo hace increíblemente bonito, para mí, lo que más significa",
  "Nuestra conexión, para no guardarnos ningún tema, sino hablar con total libertad de lo que queramos y siempre respetándonos",
  "Te amo mucho mucho mi niña hermosa, porqué...",
  "Tus ojos tienen el poder de detener el tiempo.",
  "Cuando veo tus ojos, el tiempo pasa sin contarlo, cuando salimos, simplemente la hora no existe",
  "Cada latido de mi corazón grita tu nombre.",
  "Porque te lo mereces en esta vida y en la otra, por que te amo con toda mi Alma",
  "Tu sonrisa ilumina mis días más oscuros.",
  "Eres mi motor para seguir adelante todos los días sin importar lo que pase",
  "Eres la poesía que nunca supe que necesitaba leer.",
  "Te amo y te amaré eternamente hasta donde la vida me lo permita",
  "Conmemorando nuestro primer mes de los muchos que vienen...",
  "Te Amo mi Sofy, 20/10/2024 ❤️",
];

const button = document.getElementById("startButton");
const msgBox = document.getElementById("msgBox");
let isPlaying = false;

function updateMessage(message, index, totalMessages) {
  return new Promise((resolve) => {
    msgBox.classList.remove("fade-in-text", "glow");
    msgBox.classList.add("fade-out-text");

    setTimeout(() => {
      msgBox.innerHTML = message;
      msgBox.classList.remove("fade-out-text");
      msgBox.classList.add("fade-in-text");

      setTimeout(() => {
        if (isPlaying) {
          msgBox.classList.add("glow");
        }
      }, 1500);

      setTimeout(resolve, 8000);
    }, 500);
  });
}

async function displayMessages() {
  if (isPlaying) return;
  isPlaying = true;

  button.classList.add("fade-out");
  setTimeout(() => {
    button.style.visibility = "hidden";
    button.style.position = "absolute";
    button.style.opacity = "0";
  }, 300);

  for (let i = 0; i < msgs.length; i++) {
    if (!isPlaying) break;
    await updateMessage(msgs[i], i, msgs.length);
  }

  if (isPlaying) {
    button.innerText = "Repetir";
    button.style.visibility = "visible";
    button.style.position = "relative";
    button.style.opacity = "1";
    button.classList.remove("fade-out");
    button.classList.add("fade-in");
  }

  isPlaying = false;
}

function reset() {
  isPlaying = false;
  msgBox.classList.remove("fade-in-text", "fade-out-text", "glow");
  button.classList.remove("fade-out", "fade-in");
  button.style.visibility = "visible";
  button.style.position = "relative";
  button.style.opacity = "1";
  msgBox.innerHTML = "Empecemos este viaje romántico. Presiona el botón.";
  button.innerText = "Empezar";
}

button.addEventListener("click", displayMessages);
