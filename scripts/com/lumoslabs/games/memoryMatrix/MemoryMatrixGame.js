define(["createjs"], function () {

    function MemoryMatrixGame(stage) {
        Object.defineProperties(this, {
            stage: {enumerable: false, configurable: false, writable: true, value: stage},
            gameWidth: {enumerable: true, configurable: false, writable: true},
            gameHeight: {enumerable: true, configurable: false, writable: true},
            startScree: {enumerable: true, configurable: false},
            helpScreen: {enumerable: true, configurable: false},
            playScreen: {enumerable: true, configurable: false},
            soundEffects: {enumerable: true, configurable: false}

        });
        this.initGame();
    }

    MemoryMatrixGame.prototype.initGame = function () {
        this.gameWidth = 640;
        this.gameHeight = 480;

        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 40);
        //Set position of Shape instance.
        circle.x = circle.y = 50;
        //Add Shape instance to stage display list.
        this.stage.addChild(circle);
        //Update stage will render next frame
        this.stage.update();

    }

    MemoryMatrixGame.prototype.getGameWidth = function () {
        return this.gameWidth;
    }

    return MemoryMatrixGame
});




