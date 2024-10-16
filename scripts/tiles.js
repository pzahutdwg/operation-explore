class Tile {
    constructor(x, y, tx, ty, rotation = 0, src, bg = false) {
        this.x = x
        this.y = y
        this.tx = tx
        this.ty = ty
        this.rot = rotation
        this.bg = bg
        this.img = new Image()
        this.img.src = src
    }

    collide(x, y, w, h) {
        if (this.bg) {
            if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h || x + w > this.x && y + h > this.y){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.tx * 32, this.ty * 32, 32, 32, this.x, this.y, 32, 32)
    }
}

class Creater extends Tile {
    constructor (){
        // TODO
    }
}