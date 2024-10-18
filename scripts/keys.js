class Keys {
    constructor() {
        document.addEventListener('keydown', function(e) {
            self.handle(e);
        });
    }

    // Handles keys according to their keybinds
    handle(e) {
        switch (e.key) {
            case 'W':
                // Move up
                break;
            case 'S':
                // Move down
                break;
            case 'A':
                // Crouch
                break;
            case 'D':
                // Move right
                break;
            case 'F':
                // Interact
                break;
        }
    }
}

// TODO: Keybinding, settings screen
