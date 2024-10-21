// Wires will recieve power and send it to other objects
// Wires withh have rope physics

class Wire {
    constructor(startX, startY, endX, endY) {

        this.startX = startX
        this.startY = startY
        this.endX = endX
        this.endY = endY

        // Recieving from and sending to
        // TODO this.from
        // TODO this.to
        // TODO this.power

        // Length of the wire
        // TODO this.length

        this.startImg = new Image();
        this.endImg = new Image();
        this.startImg.src = 'img/sprites/wire_start.png';
        this.endImg.src = 'img/sprites/wire_end.png';
    }

    checkPlaceCondition() {
        if (Math.sqrt((canvas.width / 2 - mouseX) ** 2 + (canvas.height / 2 - mouseY) ** 2) <= player.buildRad) {
            return true;
        } else { return false; }
    }

    //TODO Physics

    draw() {
        ctx.drawImage(this.startImg, this.startX - 26 - cameraX, this.startY - 26 - cameraY);
        ctx.drawImage(this.endImg, this.endX - 26 - cameraX, this.endY - 26 - cameraY);
    }

}
