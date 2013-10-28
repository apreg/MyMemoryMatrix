define(["createjs", "util", "Library"], function (createjs, util, lib) {

    function HelpScreen(eventListener) {
        createjs.Container.call(this);
        this.init();
        this.background = new lib.shape8();
        this.animation = new lib.sprite92();
        this.animation.setTransform(20.4, 70.1);
        this.startButton = new lib.start_btn();
        this.startButton.x = 564;
        this.startButton.y = 439;
        this.startButton.addEventListener("mousedown", eventListener);
        this.addChild(this.background, this.animation, this.startButton);

    }
    util.inherits(HelpScreen, createjs.Container);

    HelpScreen.prototype.init = function () {

    };

return HelpScreen;
});