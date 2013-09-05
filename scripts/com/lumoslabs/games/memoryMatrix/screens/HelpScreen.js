define(["createjs", "util"], function (createjs, util) {

    function HelpScreen(loader, stage) {
        createjs.Container.call(this);
        this.init();
    }
    util.inherits(HelpScreen, createjs.Container);

    HelpScreen.prototype.init = function () {
        var text = new createjs.Text("A pattern will appear on the screen. Repeat the pattern by clicking on the correct tiles.", "20px Arial", "#ff7700");
        text.x = 100;
        text.y = 100;
        text.textBaseline = "alphabetic";
        this.addChild(text);
    };

    return HelpScreen;
});