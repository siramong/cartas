const msgs = [
    "El amor es el arte de dos almas bailando al mismo ritmo.",
    "Tus ojos tienen el poder de detener el tiempo.",
    "Cada latido de mi corazón grita tu nombre.",
    "Tu sonrisa ilumina mis días más oscuros.",
    "Eres la poesía que nunca supe que necesitaba leer.",
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