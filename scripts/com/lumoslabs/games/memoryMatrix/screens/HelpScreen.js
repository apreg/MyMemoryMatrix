define(["createjs", "util", "Library"], function (createjs, util, lib) {

    function HelpScreen(loader, stage) {
        createjs.Container.call(this);
        this.init();
    }
    util.inherits(HelpScreen, createjs.Container);

    HelpScreen.prototype.init = function () {
        this.animation = new lib.sprite92();
        this.animation.setTransform(20.4, 70.1);
        this.addChild(this.animation);
    };

    return HelpScreen;
});