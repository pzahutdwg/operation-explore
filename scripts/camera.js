// Camera follows a player and it's mouse
// If the player is in build mode, show the outline and enable placing blocks

let mouseX = 0
let mouseY = 0

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        tiles.push(new Tile(e.clientX - 16, e.clientY - 16, 0, 0, 'img/tiles/tiles.png'))
    }
})
canvas.addEventListener('mousedown', () => {
    if (player.mode != 'building') {
        player.aiming = true;
    }
})

canvas.addEventListener('mouseup', () => {
    cameraX = 0;
    cameraY = 0;
})

if (player.building) { player.aiming = false; }

canvas.addEventListener('mousemove', (e) => {
    if (player.mode == 'aiming') {
        cameraX = e.clientX - player.x
        cameraY = e.clientY - player.y
    }
    else {  
        cameraX = 0;
        cameraY = 0;

        mouseX = e.clientX;
        mouseY = e.clientY;
    }
})
