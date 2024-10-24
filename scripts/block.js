class Block {
    constructor(x, y, z, tile, sheet) {

        this.x = x;
        this.y = y;
        this.z = z;

        // Player's z is always 0
        if (z == 0) {

            this.collision = true;

        } else { this.collision = false }

        // Get the desired tilesheet and get the positions of the tile in the sheet
        this.tileSheet = new Image();
        this.tileSheet.src = sheet;

        this.sheetW = this.tileSheet.width / 32;

        this.tileX = tile % this.sheetW;
        this.tileY = Math.floor(tile / this.sheetW);

    }

    // TODO physics
    // https://www.youtube.com/watch?v=01E0RGb2Wzo

    draw() {
        ctx.drawImage(this.tileSheet, this.tileX * 32, this.tileY * 32, 32, 32, this.x - cameraX, this.y - cameraY, 32, 32);
    }
}

class Sending extends Block {
    // TODO
}

class Recieving extends Block {
    // TODO
}
