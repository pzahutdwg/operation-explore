function modeSwitch(mode) {
    let prev = player.mode;

    if (player.mode == mode) {
        player.mode = 'none';
    }
    else {
        player.mode = mode;
    }

    console.log(`Switched ${prev} to ${player.mode}.`)
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':

            // Move up
            break;
        case 's':

            // Move down
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
        case 'f':

            // Build
            modeSwitch('building');
            break;
        case 'e':
            
            // Build Wires
            modeSwitch('wire');
    }
});

// TODO: keybinding, settings screen
