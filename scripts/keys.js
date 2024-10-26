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

let currentKeyDown = 'none'

document.addEventListener('keydown', function (e) {
    currentKeyDown = e.key;
});

document.addEventListener('keyup', function(e){
    if (currentKeyDown == e.key) {
        currentKeyDown = 'none';
    }
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
