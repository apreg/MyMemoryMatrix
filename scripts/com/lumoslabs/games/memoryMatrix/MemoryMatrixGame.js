define(function MemoryMatrixGame() {
    // Create enumerable, nonconfigurable properties
    Object.defineProperties(this, {
        gameWidth: {enumerable: true, configurable: false},
        gameHeight: {enumerable: true, configurable: false},
        startScree: {enumerable: true, configurable: false},
        helpScreen: {enumerable: true, configurable: false},
        playScreen: {enumerable: true, configurable: false},
        soundEffects: {enumerable: true, configurable: false}

    });

    function initGame() {
        this.gameWidth = 640;
    }

    return MemoryMatrixGame;
});

