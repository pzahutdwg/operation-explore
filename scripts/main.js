// Setup stuff
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let cameraX = 0;
let cameraY = 0;

const buildOutline = new Image()
buildOutline.src = 'img/tiles/outline.png'

const player = new Player(400, 300, 10, 100, 'img/sprites/person_placeholder.png', []);

let blocks = [];
let wires = [];

let currentPlanet = new Planet(5, 100)

function step() {
    player.step()
    updateCamera()
}

function draw() {

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)

    // Ordered by z position

    // z = 1
    // Draw the blocks
    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];

        if (block.z == 1) {
            block.draw();
        }
    }

    // z = 0
    // Draw the blocks
    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];

        if (block.z == 0) {
            block.draw();
        }
    }

    player.draw();

    // z = -1
    // Draw the blocks
    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];

        if (block.z == -1) {
            block.draw();
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

}
function main() {
    step()
    draw()
    requestAnimationFrame(main)
}

main();
