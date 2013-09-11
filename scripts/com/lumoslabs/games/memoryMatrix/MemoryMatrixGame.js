define(["createjs", "StartScreen", "HelpScreen", "Display"], function (createjs, StartScreen, HelpScreen, Display) {
    "use strict";
    function MemoryMatrixGame(loader, stage) {
        Object.defineProperties(this, {
            loader: {enumerable: false, configurable: false, writable: false, value: loader},
            stage: {enumerable: true, configurable: false, writable: true, value: stage},
            gameWidth: {enumerable: true, configurable: false, writable: true},
            gameHeight: {enumerable: true, configurable: false, writable: true},
            startScreen: {enumerable: true, configurable: false, writable: true},
            helpScreen: {enumerable: true, configurable: false, writable: true},
            playScreen: {enumerable: true, configurable: false, writable: true},
            endScreen: {enumerable: true, configurable: false, writable: true},
            soundEffects: {enumerable: true, configurable: false}

        });
        this.initGame();
    }

    MemoryMatrixGame.prototype.start = function () {
        //initPlay();
        this.stage.addChild(this.startScreen);
        return;
    };

    MemoryMatrixGame.prototype.initGame = function () {
        this.gameWidth = this.stage.canvas.width;
        this.gameHeight = this.stage.canvas.height;
        this.startScreen = new StartScreen(this.loader, this.startClick.bind(this), this.helpClick.bind(this));
        this.helpScreen = new HelpScreen(this.loader, this.startClick.bind(this));

        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addListener(this.stage, false);
        this.start();
    };


    MemoryMatrixGame.prototype.helpClick = function (event) {
        this.help();
    };

    MemoryMatrixGame.prototype.startClick = function (event) {
        this.play();
    };

    MemoryMatrixGame.prototype.play = function () {
        this.stage.addChild(this.playScreen);
        return;
    };

    MemoryMatrixGame.prototype.help = function () {
        //super.help();
        //sounds.stopAll();
        //TweenMax.killAll();
        Display.removeIfChildren(this.stage, this.startScreen, this.helpScreen, this.playScreen, this.endScreen);
        this.stage.addChild(this.helpScreen);
        //helpScreen.startAnimation();
        return;
    };

    MemoryMatrixGame.prototype.getGameWidth = function () {
        return this.gameWidth;
    };

    return MemoryMatrixGame
});




