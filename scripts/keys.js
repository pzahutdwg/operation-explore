function modeSwitch(mode) {

    if (player.mode == mode && keysReset) {
        player.mode = 'none';
        keysReset = false;
    }
    else if (keysReset){
        player.mode = mode;
        keysReset = false;
    }
}

let keysDown = [];
let keysReset = true;

document.addEventListener('keydown', function (e) {
    currentKeyDown = e.key;
    if (!keysDown.includes(e.key)) {
        keysDown.push(e.key);
    }
});

document.addEventListener('keyup', function(e){
    if (keysDown.includes(e.key)) {
        keysDown.splice(keysDown.indexOf(e.key), 1);
    }
    keysReset = true;
})

function getAction(key) {
    switch (key) {
        case 'w':
            if (player.yMom > -player.speed) {
                player.yMom -= 1
            }
            break;
        case 's':
            if (player.yMom < player.speed) {
                player.yMom += 1
            }
            break;
        case 'a':
            if (player.xMom > -player.speed) {
                player.xMom -= 1
            }
            break;
        case 'd':
            if (player.xMom < player.speed) {
                player.xMom += 1
            }
            break;
        case ' ':
            // Airbrake
            if (Math.abs(player.xMom) > 0) {
                player.xMom /= 1.1
            }
            if (Math.abs(player.yMom) > 0) {
                player.yMom /= 1.1
            }
            break;
        case 'f':
            // Build
            modeSwitch('building');
            break;
        case 'e':
            // Build Wires
            modeSwitch('wire');
            break;
    }
}

// TODO: keybinding, settings screen
