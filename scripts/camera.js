// Camera follows a player and it's mouse
// Handles tile placement too
let mouseX
let mouseY

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        blocks.push(new Block(e.clientX + cameraX - 26, e.clientY + cameraY, 0, 0, 'img/tiles/tiles.png'))
    }

})

let wireStartX
let wireStartY

canvas.addEventListener('mousedown', (e) => {

    if (player.mode == 'none') {
        player.mode = 'aiming';
    }
    else if (player.mode == 'wire') {
        wireStartX = e.clientX - 8 + cameraX
        wireStartY = e.clientY - 8 + cameraY
    }
})

canvas.addEventListener('mouseup', (e) => {

    if (player.mode == 'aiming') {
        player.mode = 'none'
        cameraX = 0;
        cameraY = 0;
    }

    else if (player.mode == 'wire' &&
    Math.sqrt((wireStartX - mouseX + cameraX) ** 2 + (wireStartY - mouseY + cameraY) ** 2) > 1) 
    {
        wires.push(new Rope(wireStartX, wireStartY + 20,
            e.clientX + cameraX - 8,
            e.clientY + cameraY + 10,
            Math.sqrt((wireStartX - mouseX + cameraX) ** 2 + (wireStartY - mouseY + cameraY) ** 2) / 8, 5));
    }
})

canvas.addEventListener('mousemove', (e) => {

    if (player.mode == 'aiming') {
        cameraX = player.x - canvas.width + e.clientX;
        cameraY = player.y - canvas.height + e.clientY;
    }
    else {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
})

// TODO: Linear <insert nerd word>
