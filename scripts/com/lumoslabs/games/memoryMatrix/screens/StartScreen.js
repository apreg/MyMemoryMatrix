define(["createjs", "util"], function (createjs, util) {

    function StartScreen(loader, startButtonEventListener, helpButtonEventListener) {

//        public var helpButton:SimpleButton;
//        public var startButton:SimpleButton;
//        protected var mBackgroundAnim:BackgroundAnimation;
//        public var mcBackground:MovieClip;

        this.helpButtonEventListener = helpButtonEventListener;
        this.startButtonEventListener = startButtonEventListener;
        this.loader = loader;
        createjs.Container.call(this);
        this.init();
    }
    util.inherits(StartScreen, createjs.Container);

    StartScreen.prototype.init = function () {

        //TODO: button creation should be outsourced !
        var startButtonSpriteSheet = new createjs.SpriteSheet({
            //images: ["assets/images/startButton.png"],
            images: [this.loader.getResult("startButtonSS")],
            frames: {
                height: 42,
                width: 114,
                regX: 0,
                regY: 0,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.startButton = new createjs.BitmapAnimation(startButtonSpriteSheet);
        this.startButton.x = 422;
        this.startButton.y = 393;
        this.startButton.addEventListener("mousedown", this.startButtonEventListener);
        var startButtonHelper = new createjs.ButtonHelper(this.startButton, "up", "over", "down");
        this.addChild(this.startButton);

        var helpButtonSpriteSheet = new createjs.SpriteSheet({
            images: [this.loader.getResult("helpButtonSS")],
            frames: {
                height: 47,
                width: 170,
                regX: 0,
                regY: 0,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.helpButton = new createjs.BitmapAnimation(helpButtonSpriteSheet);
        this.helpButton.x = 247;
        this.helpButton.y = 393;
        this.helpButton.addEventListener("mousedown", this.helpButtonEventListener);
        var helpButtonHelper = new createjs.ButtonHelper(this.helpButton, "up", "over", "down");
        this.addChild(this.helpButton);
    };

    return StartScreen
});
