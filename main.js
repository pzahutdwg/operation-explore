function main()
{

    // Draw the tiles
    for (var tile = 0; tile < tiles.length; tile++) {
        tiles[tile].draw();
    }

    // Do cool stuff :shades-dude:
    requestAnimationFrame(main);
}

main();