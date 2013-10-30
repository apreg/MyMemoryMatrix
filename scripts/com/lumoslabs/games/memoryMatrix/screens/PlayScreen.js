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
        // Layer 14
        this.trialField = new createjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
        this.trialField.lineHeight = 18;
        this.trialField.lineWidth = 30;
        this.trialField.setTransform(316.4, 1.7);

        // Layer 13
        this.levelField = new createjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
        this.levelField.lineHeight = 18;
        this.levelField.lineWidth = 30;
        this.levelField.setTransform(218.4, 1.7);

        // Layer 12
        this.instance = new lib.text74("synched", 0);
        this.instance.setTransform(117.7, 3.2, 1.001, 1.002);

        // Layer 11
        this.instance_1 = new lib.shape71("synched", 0);

        // Layer 9
        this.instance_2 = new lib.sprite73();
        this.instance_2.setTransform(363.8, 8.2);

        // Layer 8
        this.instance_3 = new lib.shape71("synched", 0);
        this.instance_3.setTransform(99.5, 0);

        // Layer 7
        this.scoreField = new createjs.Text("9000", "bold 18px Trebuchet MS", "#990000");
        this.scoreField.lineHeight = 18;
        this.scoreField.lineWidth = 77;
        this.scoreField.setTransform(436.9, 1.7);

        // Layer 6
        this.instance_4 = new lib.text69("synched", 0);
        this.instance_4.setTransform(352.6, 3.2);

        // Layer 5
        this.instance_5 = new lib.text68("synched", 0);
        this.instance_5.setTransform(263.8, 3.2, 1, 1.001);

        // Layer 4
        this.instance_6 = new lib.shape67("synched", 0);

        // Layer 2
        this.mcUserPrompt = new lib.sprite66();
        this.mcUserPrompt.setTransform(323, 427.4);

        // Layer 1
        this.instance_7 = new lib.shape64("synched", 0);

        this.addChild(this.instance_7, this.mcUserPrompt, this.instance_6, this.instance_5, this.instance_4, this.scoreField, this.instance_3, this.instance_2, this.instance_1, this.instance, this.levelField, this.trialField);


    };

    PlayScreen.prototype.setScoreText = function (param1) {
        this.scoreField.text = param1;
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
