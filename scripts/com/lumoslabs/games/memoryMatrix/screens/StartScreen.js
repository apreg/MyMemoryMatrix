define(["createjs", "util"], function (createjs, util) {

    function StartScreen(loader) {
        var playButtonHelper;
        var playButton;
        var playButtonSpriteSheet;
        this.loader = loader;
        //TODO: maybe it is not optimal to call after var declarations?
        createjs.Container.call(this);
        this.init();
    }

    util.inherits(StartScreen, createjs.Container);
    StartScreen.prototype.init = function () {

        this.playButtonSpriteSheet = new createjs.SpriteSheet({
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
        this.playButton = new createjs.BitmapAnimation(this.playButtonSpriteSheet);
        this.playButton.x = 422;
        this.playButton.y = 393;
        this.playButton.addEventListener("mousedown", function () {
            console.log("fakk");
        });
        this.playButtonHelper = new createjs.ButtonHelper(this.playButton, "up", "over", "down");
        this.addChild(this.playButton);
    };

    return StartScreen
});
