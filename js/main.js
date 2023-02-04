let canvas = document.getElementById("myCanvas");
canvas.width = 480;
canvas.height = 270;
let ctx = canvas.getContext("2d");

let obstacles = [new Obstacle(480,135, "blue"), new Obstacle(720,135, "blue")];
let player = new Player(10, 30, 30,30, "blue");

let lastUpdate = Date.now();

canvas.addEventListener("click", () => player.jump())

let stopped = false;

animate()

function animate() {
    // Get delta time
    if (stopped) return
    
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