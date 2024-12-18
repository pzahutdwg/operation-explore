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

        this.x += this.xMom * dt;
        this.y += this.yMom * dt;

        if (this.mode != 'aiming') {
            cameraX = this.x - canvas.width / 2;
            cameraY = this.y - canvas.height / 2;
        }

    }

    draw() {
    this.onScreenX = this.x - cameraX - 26;
    this.onScreenY = this.y - cameraY - 42;


        ctx.drawImage(this.img, 0, 0, 32, 32, this.onScreenX, this.onScreenY, 64, 64);
    }
}

const player = new Player(400, 300, 10, 100, 'img/sprites/red_alien_suit.png', []);
