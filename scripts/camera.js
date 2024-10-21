// Camera follows a player and it's mouse
// Handles tile placement too

let mouseX = 0
let mouseY = 0

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        tiles.push(new Tile(e.clientX - 26, e.clientY - 26, 0, 0, 'img/tiles/tiles.png'))
    }

})

let wireStartX = 0
let wireStartY = 0
canvas.addEventListener('mousedown', (e) => {

    if (player.mode == 'none') {
        player.mode = 'aiming';
    }
    else if (player.mode == 'wire') {
        wireStartX = e.clientX
        wireStartY = e.clientY
    }
})

canvas.addEventListener('mouseup', () => {

    if (player.mode == 'aiming') {
        player.mode = 'none'
        cameraX = 0;
        cameraY = 0;
    }

    else if (player.mode == 'wire') {
        let wire = new Wire( wireStartX, wireStartY, mouseX, mouseY ) 

        if (wire.checkPlaceCondition() == true) {
            wires.push(wire)
        }
    }
})

if (player.building) { player.aiming = false; }

canvas.addEventListener('mousemove', (e) => {

    if (player.mode == 'aiming') {
        cameraX = e.clientX - player.x
        cameraY = e.clientY - player.y
    }
    else {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
})

// TODO: Linear <insert nerd word>
