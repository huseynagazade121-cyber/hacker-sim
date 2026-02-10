const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreElement = document.getElementById("score");
let score = 0;

function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => player.classList.remove("jump"), 500);
    }
}

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump); // Mobil üçün

let isAlive = setInterval(() => {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 90 && obstacleLeft > 50 && playerTop <= 40) {
        document.getElementById("game-over").style.display = "block";
        document.getElementById("final-score").textContent = "Son xalın: " + score;
        obstacle.style.animation = "none";
        clearInterval(isAlive);
    } else {
        score++;
        scoreElement.textContent = "XAL: " + Math.floor(score / 10);
    }
}, 10);
