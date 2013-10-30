define(["createjs", "util", "Library"], function (createjs, util, lib) {

    function StartScreen(startButtonEventListener, helpButtonEventListener) {

//        public var helpButton:SimpleButton;
//        public var startButton:SimpleButton;
//        protected var mBackgroundAnim:BackgroundAnimation;
//        public var mcBackground:MovieClip;

        this.helpButtonEventListener = helpButtonEventListener;
        this.startButtonEventListener = startButtonEventListener;
        createjs.Container.call(this);
        this.init();
    }

    util.inherits(StartScreen, createjs.Container);

    StartScreen.prototype.init = function () {
        this.background = new createjs.Bitmap(lib.loader.getResult("background"));
        this.addChild(this.background);

        this.startButton = new lib.start_btn();
        this.startButton.x = 422;
        this.startButton.y = 393;
        this.startButton.addEventListener("mousedown", this.startButtonEventListener);
        this.addChild(this.startButton);

        this.helpButton = new lib.howto_btn();
        this.helpButton.x = 247;
        this.helpButton.y = 393;
        this.helpButton.addEventListener("mousedown", this.helpButtonEventListener);
        this.addChild(this.helpButton);

    };

    return StartScreen
});
