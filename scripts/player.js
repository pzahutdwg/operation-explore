class Player {
    constructor(x, y, speed, health, img, inv) {

        this.x = x;
        this.y = y;
        this.z = 0;

        this.speed = speed;
        this.xMom = 0;
        this.yMom = 0;

        this.health = health;
        this.inv = inv;

        this.mode = 'none';

        // Build radius
        this.buildRad = 100

        this.img = new Image();
        this.img.src = img;

    }

    step() {

        this.x += this.xMom       

    }

    draw() {
        ctx.drawImage(this.img, this.x - cameraX - 26, this.y - cameraY - 42);
    }
}
