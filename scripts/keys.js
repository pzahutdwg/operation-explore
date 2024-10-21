
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':
            // Move up
            break;
        case 's':
            // Move down
            break;
        case 'a':
            // Crouch
            break;
        case 'd':
            // Move right
            break;
        case 'f':
            console.log(player.mode)

            if (player.mode == 'building') {
                player.mode = 'none';
            } 
            else 
            {
                player.mode = 'building';
            }

            console.log(player.mode);
            break;
    }
});

// TODO: keybinding, settings screen
