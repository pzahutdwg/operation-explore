// Setup stuff
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let cameraX = 0;
let cameraY = 0;

const buildOutline = new Image()
buildOutline.src = 'img/tiles/outline.png'

const player = new Player(400, 300, 0, 100, 'img/sprites/person_placeholder.png', []);

let tiles = [];


function main() {

    ctx.fillStyle = "rgba(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ordered by z position

    // z = 1
    // Draw the tiles
    for (var i = 0; i < tiles.length; i++) {
        let tile = tiles[i];

        if (tile.z == 1) {
            tile.draw();
        }
    }

    // z = 0
    // Draw the tiles
    for (var i = 0; i < tiles.length; i++) {
        let tile = tiles[i];

        if (tile.z == 0) {
            tile.draw();
        }
    }

    player.draw();

    // z = -1
    // Draw the tiles
    for (var i = 0; i < tiles.length; i++) {
        let tile = tiles[i];

        if (tile.z == -1) {
            tile.draw();
        }
    }

    // Show the build outline
    if (player.mode == 'building') {
        ctx.drawImage(buildOutline, mouseX - 16, mouseY - 16)
    }

    requestAnimationFrame(main);

}

main();
