// Camera follows a player and it's mouse
// Handles tile placement too
let mouseX = 0
let mouseY = 0

canvas.addEventListener('click', (e) => {
    if (player.mode == 'building') {
        blocks.push(new Block(e.clientX - 26, e.clientY - 26, 0, 0, 'img/tiles/tiles.png'))
    }

})

let wireStartX = 0
let wireStartY = 0

canvas.addEventListener('mousedown', (e) => {

    if (player.mode == 'none') {
        console.log(`Switched from ${player.mode} to aiming.`);
        player.mode = 'aiming';
    }
    else if (player.mode == 'wire') {
        wireStartX = e.clientX
        wireStartY = e.clientY
    }
})

canvas.addEventListener('mouseup', () => {

    if (player.mode == 'aiming') {
        console.log(`Switched from ${player.mode} to none.`);
        player.mode = 'none'
        cameraX = 0;
        cameraY = 0;
    }

    else if (player.mode == 'wire' && Math.sqrt((wireStartX - mouseX) ** 2 + (wireStartY - mouseY) ** 2) > 1) {
        wires.push(new Rope(wireStartX - 8, wireStartY - 8, mouseX - 8, mouseY - 8, Math.sqrt((wireStartX - mouseX) ** 2 + (wireStartY - mouseY) ** 2) / 8, 5));
    }
})

if (player.building) { player.aiming = false; }

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
/*
//  Follow player
function updateCamera() {
    cameraX = player.x - canvas.width
    cameraY = player.y - canvas.height
}
*/
// TODO: Linear <insert nerd word>
