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

        this.aiming = false;
        this.building = false;

        this.img = new Image();
        this.img.src = img;
    }

    draw() {
        ctx.drawImage(this.img, this.x - cameraX, this.y - cameraY);
    }
}