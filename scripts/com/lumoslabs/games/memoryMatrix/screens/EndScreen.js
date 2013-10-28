define(["createjs", "util", "Library"], function (createjs, util, lib) {

    function EndScreen(param1) {
        Object.defineProperties(this, {
            continueButton:{enumerable: true, configurable: false, writable: true},
            scoreField: {enumerable: true, configurable: false, writable: true},
            levelField: {enumerable: true, configurable: false, writable: true}
         });
        createjs.Container.call(this);
        this.init();
        this.continueButton.addEventListener("mousedown", param1, false, 0, true);

    }

    util.inherits(EndScreen, createjs.Container);

    EndScreen.prototype.init = function () {
        this.instance = new lib.text108("synched", 0);
        this.instance.setTransform(217.5, 173);

        // Layer 26
        this.instance_1 = new lib.shape107("synched", 0);

        // Layer 24
        this.instance_2 = new lib.sprite42();
        this.instance_2.setTransform(40, 70, 1.546, 1.546);

//        // Layer 21
//        this.surveyButton = new lib.button60();
//        this.surveyButton.setTransform(0, 450);
//        new createjs.ButtonHelper(this.surveyButton, 0, 1, 2, false, new lib.button60(), 3);

        // Layer 17
        this.continueButton = new lib.done_btn();
        this.continueButton.setTransform(313.4, 373);
        new createjs.ButtonHelper(this.continueButton, 0, 1, 2, false, new lib.done_btn(), 3);

        // Layer 16
        this.levelField = new createjs.Text("8 tiles  ", "18px Trebuchet MS", "#0099FF");
        this.levelField.lineHeight = 18;
        this.levelField.lineWidth = 67;
        this.levelField.setTransform(325, 250, 1.001, 1);

        // Layer 15
        this.scoreField = new createjs.Text("88888  ", "18px Trebuchet MS", "#0099FF");
        this.scoreField.lineHeight = 18;
        this.scoreField.lineWidth = 64;
        this.scoreField.setTransform(325, 215, 1.001, 1);

        // Layer 14
        this.instance_3 = new lib.text99("synched", 0);
        this.instance_3.setTransform(271.7, 252, 1, 0.999);

        // Layer 13
        this.instance_4 = new lib.text98("synched", 0);
        this.instance_4.setTransform(217, 217, 1.001, 0.999);

        // Layer 11
        this.instance_5 = new lib.sprite97();
        this.instance_5.setTransform(176.6, 158.2, 0.448, 0.295);
        this.instance_5.shadow = new createjs.Shadow("rgba(153,153,153,1)", 0, 0, 5);

        // Layer 9
        this.instance_6 = new lib.sprite95();
        this.instance_6.setTransform(178.1, 256.6, 1.011, 1);
        this.instance_6.shadow = new createjs.Shadow("rgba(0,0,0,1)", 1, 5, 5);

        // Layer 6
        this.instance_7 = new lib.sprite15();
        this.instance_7.setTransform(320, 240);

        // Layer 1
        this.instance_8 = new lib.sprite10();
        this.instance_8.setTransform(0.4, -0.5);

        this.addChild(this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.scoreField, this.levelField, this.continueButton, this.surveyButton, this.instance_2, this.instance_1, this.instance);
    };

    EndScreen.prototype.setScoreText = function (param1) {
        this.scoreField.text = param1;
    };

    EndScreen.prototype.setLevelText = function (param1) {
        this.levelField.text = param1;
    };

    return EndScreen
});
