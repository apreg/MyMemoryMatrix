define(function () {

    function MemoryMatrixGame() {
        // Create enumerable, nonconfigurable properties
        Object.defineProperties(this, {
            gameWidth: {enumerable: true, configurable: false, writable: true},
            gameHeight: {enumerable: true, configurable: false, writable: true},
            startScree: {enumerable: true, configurable: false},
            helpScreen: {enumerable: true, configurable: false},
            playScreen: {enumerable: true, configurable: false},
            soundEffects: {enumerable: true, configurable: false}

        });
    }

    MemoryMatrixGame.prototype.initGame = function () {
        this.gameWidth = 640;
        this.gameHeight = 480;

    }

    MemoryMatrixGame.prototype.getGameWidth = function () {
        return this.gameWidth;
    }

    return MemoryMatrixGame
});




