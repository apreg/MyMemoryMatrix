define(["createjs", "util", "Library"], function (createjs, util, lib) {

    function PlayScreen() {
        Object.defineProperties(this, {

            scoreField: {enumerable: true, configurable: false, writable: true},
            trialField: {enumerable: true, configurable: false, writable: true},
            levelField: {enumerable: true, configurable: false, writable: true},
            mcUserPrompt: {enumerable: true, configurable: false, writable: true}
        });
        createjs.Container.call(this);
        this.init();

    }

    util.inherits(PlayScreen, createjs.Container);

    PlayScreen.prototype.init = function () {
        this.scoreField = new lib.score_mc();
        this.scoreField.x = 353;
        this.scoreField.y = 0;

        this.trialField = new createjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
        this.trialField.lineHeight = 18;
        this.trialField.lineWidth = 30;
        this.trialField.setTransform(316.4, 1.7);

        this.levelField = new createjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
        this.levelField.lineHeight = 18;
        this.levelField.lineWidth = 30;
        this.levelField.setTransform(218.4, 1.7);

        this.mcUserPrompt = new lib.sprite66();
        this.mcUserPrompt.setTransform(323, 427.4);

        this.addChild(this.scoreField, this.trialField, this.levelField, this.mcUserPrompt);

    };

    PlayScreen.prototype.setScoreText = function (param1) {
        this.scoreField.myScore.text = param1;
    };

    PlayScreen.prototype.setTrialText = function (param1) {
        this.trialField.text = param1;
    };

    PlayScreen.prototype.setLevelText = function (param1) {
        this.levelField.text = param1;
    };

    PlayScreen.prototype.setUserPrompt = function (param1) {
        if (this.mcUserPrompt) {
            this.mcUserPrompt.tf.text = param1;
        }
    };

    return PlayScreen
});
