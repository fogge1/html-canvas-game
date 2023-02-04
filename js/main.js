let canvas = document.getElementById("myCanvas");
canvas.width = 480;
canvas.height = 270;
let ctx = canvas.getContext("2d");

ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Click to start", canvas.width/2, canvas.height/2); 

canvas.addEventListener("click", startGame);

let obstacles = [new Obstacle(480,135, "blue"), new Obstacle(720,135, "blue")];
let player = new Player(10, 30, 30,30, "blue");

player.draw(ctx);

for (i of obstacles) {
    i.draw(ctx);
}

let lastUpdate = 0

let stopped = false;

function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.removeEventListener("click", startGame);
    canvas.addEventListener("click", () => player.jump())
    lastUpdate = Date.now();
    animate();
}

function animate() {

    // Stop game
    if (stopped) {
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", canvas.width/2, canvas.height/2);
        return;
    }
    // Get delta time
    let currentUpdate = Date.now();
    let dt = currentUpdate-lastUpdate;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(dt);
    player.draw(ctx);

    for (i of obstacles) {
        i.draw(ctx);
        i.update(dt);

        if (player.isCollision(i)) {
            stopped = true;
        }
    }
    
    lastUpdate = currentUpdate;
    requestAnimationFrame(animate);
}