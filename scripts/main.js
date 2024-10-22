// Setup stuff
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let cameraX = 0;
let cameraY = 0;

const buildOutline = new Image()
buildOutline.src = 'img/tiles/outline.png'

const player = new Player(400, 300, 0, 100, 'img/sprites/person_placeholder.png', []);

let tiles = [];
let wires = [];

function main() {

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)

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

    for (var i = 0; i < wires.length; i++) {
        wires[i].update();
        wires[i].draw();
    }

    //! Show the build outlines AFTER EVERYTHING ELSE
    if (player.mode == 'building') {
        ctx.drawImage(buildOutline, mouseX - 26, mouseY - 26);
    }
    else if (player.mode == 'wire') {
        // TODO: Show what is connected to what
    }

    requestAnimationFrame(main);

}

main();
