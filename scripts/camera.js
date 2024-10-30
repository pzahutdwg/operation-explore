// Camera follows a player and it's mouse
// Handles tile placement too
let mouseX = 0
let mouseY = 0

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        blocks.push(new Block(e.clientX - 26 + cameraX, e.clientY - 26 + cameraY, 0, 0, 'img/tiles/tiles.png'))
    }

})

let wireStartX = 0
let wireStartY = 0

canvas.addEventListener('mousedown', (e) => {

    if (player.mode == 'none') {
        player.mode = 'aiming';
    }
    else if (player.mode == 'wire') {
        wireStartX = e.clientX - 8
        wireStartY = e.clientY - 8
    }
})

canvas.addEventListener('mouseup', (e) => {

    if (player.mode == 'aiming') {
        player.mode = 'none'
        cameraX = 0;
        cameraY = 0;
    }

    else if (player.mode == 'wire' && Math.sqrt((wireStartX - mouseX + cameraX) ** 2 + (wireStartY - mouseY + cameraY) ** 2) > 1) {
        wires.push(new Rope(wireStartX+ cameraX, wireStartY+ cameraY, e.clientX - 8 + cameraX, e.clientY - 8 + cameraY, Math.sqrt((wireStartX - mouseX + cameraX) ** 2 + (wireStartY - mouseY + cameraY) ** 2) / 8, 5));
    }
})

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
