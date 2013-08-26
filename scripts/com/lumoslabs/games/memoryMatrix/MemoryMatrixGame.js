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
        this.gameWidth = this.stage.canvas.width;
        this.gameHeight = this.stage.canvas.height;

        var playButtonSpriteSheet = new createjs.SpriteSheet({
            //images: ["assets/images/playButton.png"],
            images: [window.loader.getResult("playButtonImage")],
            frames: {
                height: 42,
                width: 113,
                regX: 0,
                regY: 0,
                count: 2},
            animations: {out: 0, over: 1, down: 1}
        });
        var animation = new createjs.BitmapAnimation(playButtonSpriteSheet);
        animation.x = 200;
        animation.y = 200;
        //animation.cursor = "pointer";
        var helper = new createjs.ButtonHelper(animation, "out", "over", "down");
        //animation.gotoAndStop("down");
        this.stage.addChild(animation);
        createjs.Ticker.setFPS(60);
        //createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.addListener(this.stage);
    };


    MemoryMatrixGame.prototype.getGameWidth = function () {
        return this.gameWidth;
    };

    return MemoryMatrixGame
});




