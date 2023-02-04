class Obstacle {
    // x = x coordinate, ch = canvas height, c = colour
    constructor(x, ch , c) {
        this.ch = ch;
        this.w = 10;

        this.h1 = this.randomInt(this.ch/2)+15;
        this.h2 = this.randomInt(this.ch/2)+15;

        this.x = x;  
        this.speed = -0.1;
        this.c = c;
    }

    update(dt) {
        this.x += this.speed*dt;

        if (this.x < 0) {
            this.x = 480;
            this.h1 = this.randomInt(this.ch/2)+15;
            this.h2 = this.randomInt(this.ch/2)+15;
        }
    }

    draw(ctx) {

        ctx.fillRect(this.x, 0, this.w, this.h1);
        ctx.fillRect(this.x, 270, this.w, -this.h2);
        ctx.fillStyle = this.c;
    }

    randomInt(val) {
        return Math.floor(Math.random() * val);
    }
}