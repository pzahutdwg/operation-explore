// Camera follows a player and it's mouse
// Handles tile placement too
let mouseX
let mouseY

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        blocks.push(new Block(e.clientX + cameraX - 24, e.clientY + cameraY - 24, 0, 0, 'img/tiles/tiles.png'))
    }

})

let wireStartX
let wireStartY

canvas.addEventListener('mousedown', (e) => {

    if (player.mode == 'none') {
        player.mode = 'aiming';
    }
    else if (player.mode == 'wire') {
        wireStartX = e.clientX + cameraX - 8
        wireStartY = e.clientY + cameraY - 28
    }
})

canvas.addEventListener('mouseup', (e) => {

    if (player.mode == 'aiming') {
        player.mode = 'none'
        cameraX = 0;
        cameraY = 0;
    }

    else if (player.mode == 'wire' &&
    Math.sqrt((wireStartX - e.clientX + cameraX - 8) ** 2 + (wireStartY - e.clientY + cameraY - 8) ** 2) - 40 > 1) 
    {
        wires.push(new Rope(wireStartX, wireStartY + 20,
            e.clientX + cameraX - 8,
            e.clientY + cameraY - 8,
            (Math.sqrt((wireStartX - e.clientX + cameraX - 8) ** 2 + (wireStartY - e.clientY + cameraY - 8) ** 2) - 40) / 25,
            5));
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
