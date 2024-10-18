// Placeholder variables for the camera
let cameraX = 0;
let cameraY = 0;

// Camera follows a player and it's mouse
// If the player is in build mode, show the outline and enable placing blocks

canvas.addEventListener('click', (e) => {
    if (building) {
        tiles.push(new Tile(e.clientX -16, e.clientY -16, 0, 0, 'img/tiles/tiles.png'))
    }
})
