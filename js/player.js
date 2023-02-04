class Player {
    constructor(x, y, w, h, c) {
        
        this.w = w;
        this.h = h;

        this.x = x;
        this.y = y;
        this.speed = 0;
        this.gravity = 0.0005;
        this.c = c;
    }

    update(dt) {
        this.speed += this.gravity * dt;
        this.y += this.speed*dt;
    }

    jump() {
        this.speed = -0.25;
    }

    isCollision(obstacle) {
        let rightPos = this.x + this.w;
        let topPos = this.y;
        let bottomPos = this.y + this.h;
        // > under || < upper

        let h1 =  obstacle.h1;
        let h2 = obstacle.h2;
        let x = obstacle.x;

        if ((rightPos <= x + obstacle.w && rightPos >= x ) && ( topPos < h1 || bottomPos > 270 - h2)) return true

        return false;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.c;
    }
}