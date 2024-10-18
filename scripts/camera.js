// Camera follows a player and it's mouse
// If the player is in build mode, show the outline and enable placing blocks

canvas.addEventListener('click', (e) => {
    if (player.building) {
        tiles.push(new Tile(e.clientX - 16, e.clientY - 16, 0, 0, 'img/tiles/tiles.png'))
    }
})
canvas.addEventListener('mousedown', () => {
    player.aiming = true;
})

canvas.addEventListener('mouseup', () => {
    player.aiming = false;
    cameraX = 0;
    cameraY = 0;
})

if (player.building) { player.aiming = false; }

canvas.addEventListener('mousemove', (e) => {
    if (player.aiming) {
        cameraX = e.clientX - player.x
        cameraY = e.clientY - player.y
    }
})
