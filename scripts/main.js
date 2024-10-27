// Setup stuff
let cameraX = 0;
let cameraY = 0;

const buildOutline = new Image()
buildOutline.src = 'img/tiles/outline.png'

let blocks = [];
let wires = [];

let currentPlanet = new Planet(5, 100);
let now = Date.now();
let lastTime = now;
let dt;
function step() 
{
    now = Date.now();
    dt = (now - lastTime) / 25;
    lastTime = now;

    for (let key of keysDown) {
        getAction(key);
    }
    player.step();
    //updateCamera();
}

function draw() {

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)

    // Ordered by z position

    // z = 1
    // Draw the blocks
    for (let block of blocks) {
        if (block.z == 1) {
            block.draw();
        }
    }

    // z = 0
    // Draw the blocks
    for (let block of blocks) {
        if (block.z == 0) {
            block.draw();
        }
    }


    player.draw();

    // z = -1
    // Draw the blocks
    for (let block of blocks) {
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
