
document.addEventListener('keydown', function(e) {
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
            player.building = !player.building;
            // Interact
            break;
    }
});

// TODO: Keybinding, settings screen
