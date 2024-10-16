class Tile {
    constructor(x, y, rotation = 0, src, bg = false) {
        this.x = x
        this.y = y
        this.rot = rotation
        this.bg = bg
        this.img = new Image()
        this.img.src = src
    }

    collide(x, y, w, h) {
        if (this.bg) {
            if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    draw(ctx) {
        ctx.drawImage(img, x, y, 32, 32)
    }
}