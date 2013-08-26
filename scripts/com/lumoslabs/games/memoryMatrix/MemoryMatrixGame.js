define(["createjs"], function (createjs) {

    function MemoryMatrixGame(loader, stage) {
        Object.defineProperties(this, {
            loader: {enumerable: false, configurable: false, writable: false, value: loader},
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
            images: [this.loader.getResult("playButtonImage")],
            frames: {
                height: 42,
                width: 114,
                regX: 0,
                regY: 0,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        var animation = new createjs.BitmapAnimation(playButtonSpriteSheet);
        animation.x = 200;
        animation.y = 200;
        //animation.cursor = "pointer";
        var helper = new createjs.ButtonHelper(animation, "up", "over", "down");
        //animation.gotoAndStop("down");
        this.stage.addChild(animation);

        createjs.Ticker.addEventListener("tick", this.stage);
        var btn = new createjs.MovieClip(null, null, false, {up: 0, over: 1, down: 2, out: 0}).set({x: 100, y: 100});
        this.stage.addChild(btn);
        var u = new createjs.Bitmap("assets/images/button_0.png");
        var o = new createjs.Bitmap("assets/images/button_1.png");
        var d = new createjs.Bitmap("assets/images/button_2.png");

        btn.timeline.addTween(
            createjs.Tween.get(u).wait(1).to({_off:true}),
            createjs.Tween.get(o).to({_off:true}).wait(1).to({_off:false}).wait(1).to({_off:true}),
            createjs.Tween.get(d).to({_off:true}).wait(2).to({_off:false})
        );

        var helper2 = new createjs.ButtonHelper(btn);

        createjs.Ticker.setFPS(16);

        createjs.Ticker.addListener(this.stage, false);
    };


    MemoryMatrixGame.prototype.getGameWidth = function () {
        return this.gameWidth;
    };

    return MemoryMatrixGame
});




