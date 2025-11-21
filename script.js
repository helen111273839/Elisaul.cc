function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("heart");
    corazon.textContent = Math.random() > 0.5 ? "❤️" : "💗";

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 3000);
}

setInterval(crearCorazon, 700);
