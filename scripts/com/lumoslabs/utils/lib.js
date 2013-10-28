define(["createjs", "util"], function lib(cjs, util) {
    lib.loader;
    lib.img = {};
    var p; // shortcut to reference prototypes

// stage content:
    (lib.memory_matrix_game_flaMainTimeline = function () {
        this.initialize();

    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);


// symbols:
    (lib.image12 = function () {
        this.initialize(lib.loader.getResult("image12"));
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 642, 482);


    (lib.image44 = function () {
        this.initialize(lib.loader.getResult("image44"));
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 536, 256);


    (lib.image48 = function () {
        this.initialize(lib.loader.getResult("image48"));
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 266);


    (lib.sprite66 = function () {
        this.initialize();

        // Layer 1
        this.tf = new cjs.Text("---", "18px Trebuchet MS");
        this.tf.textAlign = "center";
        this.tf.lineHeight = 18;
        this.tf.lineWidth = 600;
        this.tf.setTransform(21.9, -13.4);

        this.addChild(this.tf);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-277.9, -13.4, 603.9, 27);


    (lib.sprite9 = function () {
        this.initialize();

    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);


    (lib.text144Up = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Play Again", "bold 18px Trebuchet MS", "#FFFFFF");
        this.text.lineHeight = 18;
        this.text.lineWidth = 107;
        this.text.setTransform(10.3, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(10.3, -3.7, 111.1, 45.8);


    (lib.text132 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Game Over", "16px Trebuchet MS");
        this.text.lineHeight = 16;
        this.text.lineWidth = 95;
        this.text.setTransform(-35.8, -3.9);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-35.8, -3.9, 98.8, 41.1);


    (lib.text128 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Game Over", "16px Trebuchet MS");
        this.text.lineHeight = 16;
        this.text.lineWidth = 95;
        this.text.setTransform(-35.8, -3.9);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-35.8, -3.9, 98.6, 41.1);


    (lib.text124 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Next:  ", "16px Trebuchet MS");
        this.text.lineHeight = 16;
        this.text.lineWidth = 54;
        this.text.setTransform(3.4, -3.9);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(3.4, -3.9, 57.8, 41.1);


    (lib.text122 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Points:", "16px Trebuchet MS");
        this.text.lineHeight = 16;
        this.text.lineWidth = 64;
        this.text.setTransform(9.5, -3.9);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(9.5, -3.9, 67.5, 41.1);


    (lib.text118 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Score:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 68;
        this.text.setTransform(26.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(26.9, -3.7, 71.7, 45.8);


    (lib.text111 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Time:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 64;
        this.text.setTransform(-3.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.9, -3.7, 67.6, 45.8);


    (lib.text108 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("GAME OVER", "italic bold 23px Trebuchet MS", "#CC3300");
        this.text.lineHeight = 23;
        this.text.lineWidth = 155;
        this.text.setTransform(34, -3.4);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(34, -3.4, 158.7, 57.4);


    (lib.text103Up = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Continue", "bold 18px Trebuchet MS", "#FFFFFF");
        this.text.lineHeight = 18;
        this.text.lineWidth = 96;
        this.text.setTransform(10.3, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(10.3, -3.7, 99.6, 45.8);


    (lib.text99 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Max Level:", "18px Trebuchet MS", "#333333");
        this.text.lineHeight = 18;
        this.text.lineWidth = 107;
        this.text.setTransform(-44.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-44.9, -3.7, 110.8, 45.8);


    (lib.text98 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Score:", "18px Trebuchet MS", "#333333");
        this.text.lineHeight = 18;
        this.text.lineWidth = 68;
        this.text.setTransform(45, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(45, -3.7, 71.9, 45.8);


    (lib.text80 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Instructions", "bold 24px Trebuchet MS", "#993300");
        this.text.lineHeight = 24;
        this.text.lineWidth = 160;
        this.text.setTransform(-3.9, -3.4);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.9, -3.4, 164.3, 59.8);


    (lib.text79 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("A pattern will appear on the \nscreen.\nRepeat the pattern by clicking \non the correct tiles.", "16px Trebuchet MS");
        this.text.lineHeight = 16;
        this.text.lineWidth = 242;
        this.text.setTransform(-3.9, -3.9);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.9, -3.9, 246.3, 96.8);


    (lib.text74 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Tiles:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 61;
        this.text.setTransform(49.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(49.9, -3.7, 65.3, 45.8);


    (lib.text69 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Score:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 68;
        this.text.setTransform(26.8, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(26.8, -3.7, 71.8, 45.8);


    (lib.text68 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Trials:", "18px Trebuchet MS");
        this.text.lineHeight = 18;
        this.text.lineWidth = 68;
        this.text.setTransform(-3.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.9, -3.7, 72.4, 45.8);


    (lib.text59UpOverDownHit = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Click here to take a 1 minute survey and help us improve your Lumosity experience!", "19px Arial Narrow");
        this.text.lineHeight = 19;
        this.text.lineWidth = 644;
        this.text.setTransform(-3.9, -3);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.9, -3, 648.1, 47);


    (lib.text55UpOverDownHit = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Play Again", "italic bold 25px Trebuchet MS", "#2181A9");
        this.text.lineHeight = 25;
        this.text.lineWidth = 153;
        this.text.setTransform(10.3, -4.3);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(10.3, -4.3, 156.6, 62);


    (lib.text41 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("MEMORY MATRIX", "12px Arial", "#006666");
        this.text.lineHeight = 12;
        this.text.lineWidth = 125;
        this.text.setTransform(-1.9, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1.9, -3.7, 128.7, 30.7);


    (lib.text26Up = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("How to Play", "bold 18px Trebuchet MS", "#FFFFFF");
        this.text.lineHeight = 18;
        this.text.lineWidth = 122;
        this.text.setTransform(10.3, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(10.3, -3.7, 125.8, 45.8);


    (lib.text20Up = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Play", "bold 18px Trebuchet MS", "#FFFFFF");
        this.text.lineHeight = 18;
        this.text.lineWidth = 51;
        this.text.setTransform(10.3, -3.7);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(10.3, -3.7, 54.5, 45.8);


    (lib.text17 = function () {
        this.initialize();

        // Layer 1
        this.text = new cjs.Text("Remember which tiles appeared in the matrix.", "17px Trebuchet MS");
        this.text.lineHeight = 17;
        this.text.lineWidth = 404;
        this.text.setTransform(-579.4, -3.8);

        this.addChild(this.text);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-579.4, -3.8, 407.9, 43.5);


    (lib.shape146Hit = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#63C102", "#305B02"], [0.369, 1], 376.1, -30.3, 376.1, 20.8).s().p("ArvDRQgyAAAAgyIAAk9QAAgyAyAAIXfAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-80.2, -20.9, 160.6, 41.9);


    (lib.shape145OverDown = function () {
        this.initialize();

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#3A6F01").ss(0.5, 0, 0, 3).p("AA3g4IgmhlIhEBVIhuALIA9BTIgcBtIBqggIBdA7IABhsIBZhCg");
        this.shape.setTransform(51.6, -1.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FEDE5F", "#FDD73E", "#AD821F"], [0, 0.302, 1], -1.2, 0.5, 0, -1.2, 0.5, 15.4).s().p("AgWBjIhpAgIAchtIg9hTIBugLIBEhVIAlBlIBqAoIhYBBIgBBtg");
        this.shape_1.setTransform(51.5, -1.4);

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#63C102", "#305B02"], [0.369, 1], 376.1, -30.3, 376.1, 20.8).s().p("ArvDRQgyAAAAgyIAAk9QAAgyAyAAIXfAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-80.2, -20.9, 160.6, 41.9);


    (lib.shape143Up = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#52A001", "#305B02"], [0.369, 1], 165.6, -25.3, 165.6, 25.8).s().p("ArvDRQgyAAAAgyIAAk9QAAgyAyAAIXfAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-80.2, -20.9, 160.6, 41.9);


    (lib.shape140 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CCCCCC").s().p("AppJqIAAzTITTAAIAATTg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-61.8, -61.8, 123.7, 123.7);


    (lib.shape138 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AGemiIouAAQkIAAAAEHIAAJD");
        this.shape.setTransform(42.6, 43.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AmaGmIAApDQgBkIEIAAIIuAAIAANLg");
        this.shape_1.setTransform(42.8, 43.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AmjGuIAApRQAAkKELAAII7AAIAAAQIouAAQkIAAABEIIAAJDg");
        this.shape_2.setTransform(42, 43);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 84, 86.1);


    (lib.shape136 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AAAppIAATT");
        this.shape.setTransform(1.6, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AphJqIAAzTITDAAIAATTg");
        this.shape_1.setTransform(62.7, 0);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AgHJqIAAzTIAPAAIAATTg");
        this.shape_2.setTransform(0.8, 0);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -61.8, 123.7, 123.7);


    (lib.shape134 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AJqAAIzTAA");
        this.shape.setTransform(0, 1.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AppJiIAAzDITTAAIAATDg");
        this.shape_1.setTransform(0, 62.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AppAIIAAgPITTAAIAAAPg");
        this.shape_2.setTransform(0, 0.8);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-61.8, 0, 123.7, 123.7);


    (lib.shape121 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#BBBBBB").ss(1, 0, 0, 3, true).p("AsLFUIAAqnIYXAAIAAKng");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AsLFUIAAqnIYXAAIAAKng");

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-77.9, -33.9, 156, 68);


    (lib.shape117 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3).p("AtqCVIV6AAIAgAAIAIAAQBkAIBPhUIAYgdIAEgFQA2hGAnh2IgoAAI6mAA");
        this.shape.setTransform(87.6, 15);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F1F1").s().p("AI8CVIgIAAIggAAI17AAIAAkqIanAAIAoAAQgnB2g3BGIgDAFIgZAdQhIBNhaAAIgQgBg");
        this.shape_1.setTransform(87.2, 15);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 174.5, 30.1);


    (lib.shape114 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#990000", "#FF0000"], [0, 0.675], 0, 42.1, 0, -41.9).s().p("AmjEXIFAkXIlDkhICNiCIEZFAIEhk9ICDCHIlCEZIFFEdIiGCDIkhk/IkgFDg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-42.3, -42.1, 84.8, 84.2);


    (lib.shape110 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3).p("ALRCVIwKAAQhtAJh3hVQh/hYgtiGIWaAA");
        this.shape.setTransform(71.4, 15);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F1F1").s().p("AohBJQh/hYgsiGIWZAAIAAEqIwJAAIgUABQhkAAhthNg");
        this.shape_1.setTransform(71.8, 15);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 143.6, 30.1);


    (lib.shape107 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#449987").s().p("AuCAPIAAgLIcGAAIAAALgAuCgEIAAgKIcGAAIAAAKg");
        this.shape.setTransform(320, 201.5);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(230, 200, 180, 3);


    (lib.shape105Hit = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#63C102", "#305B02"], [0.369, 1], 326.3, -30.3, 326.3, 20.8).s().p("ArFDRQgyAAAAgyIAAk9QAAgyAyAAIWLAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-75.9, -20.9, 152.1, 41.9);


    (lib.shape104OverDown = function () {
        this.initialize();

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#366801").ss(1, 0, 0, 3, true).p("AiRg5IA8A5Ig8A5QgPAuAjAVIB9h8Ih9h7QgjAVAPAtgAADg5IA8A5Ig8A5QgNAuAhAVIB9h8Ih9h7QghAVANAtg");
        this.shape.setTransform(46, 1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AAFA5IA8g5Ig8g5QgNgtAggVIB9B7Ih9B8QgggVANgugAiPA5IA8g5Ig8g5QgPgtAigVIB8B7Ih8B8QgigVAPgug");
        this.shape_1.setTransform(45.9, 1);

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#63C102", "#305B02"], [0.369, 1], 326.3, -30.3, 326.3, 20.8).s().p("ArFDRQgyAAAAgyIAAk9QAAgyAyAAIWLAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-75.9, -20.9, 152.1, 41.9);


    (lib.shape102Up = function () {
        this.initialize();

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#366801").ss(1, 0, 0, 3, true).p("AiRg5IA8A5Ig8A5QgPAuAjAVIB9h8Ih9h7QgjAVAPAtgAADg5IA8A5Ig8A5QgNAuAhAVIB9h8Ih9h7QghAVANAtg");
        this.shape.setTransform(46, 1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AAFA5IA8g5Ig8g5QgNgtAggVIB9B7Ih9B8QgggVANgugAiPA5IA8g5Ig8g5QgPgtAigVIB8B7Ih8B8QgigVAPgug");
        this.shape_1.setTransform(45.9, 1);

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#52A001", "#305B02"], [0.369, 1], 145.8, -25.3, 145.8, 25.8).s().p("ArFDRQgyAAAAgyIAAk9QAAgyAyAAIWLAAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-75.9, -20.9, 152.1, 41.9);


    (lib.shape96 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3).p("Egx+AlfMAAAhK9MBj9AAAMAAABK9g");
        this.shape.setTransform(320, 240);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F4F7F9").s().p("Egx+AlfMAAAhK9MBj9AAAMAAABK9g");
        this.shape_1.setTransform(320, 240);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 480);


    (lib.shape94 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("A17DnIAAnNMAr3AAAIAAHNQ1ah82dB8g");
        this.shape.setTransform(140.4, 23.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 280.9, 46.3);


    (lib.shape90 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("AAfgoIAAAQAA9gdQACAJgBAMAAfgoQAJgNANAKQAHAGABAIQANgCAHAHQAHAGgHAsIgLA2QgDAIACAgIhqAAQACgDgUgyIgbhAQgGgLAQACQAQABAMAQIAAhoQAAgLAGgIIAHgFIAJgBIAJADQAFADABAGIACAoIAAANIAAAcAgFg1QAGgJAIAAQARAAAEANIABAJ");
        this.shape.setTransform(8.5, 12);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], 0.1, -3.8, 0, 0.1, -3.8, 27).s().p("AglB4QACgEgUgxIgbhAQgGgMAQACQAQACAMAQIAAhoQAAgLAGgIIAHgGIAJgBIAJADQAFAEABAFIACApIAAAMIAAAcIAAgcQAGgIAIAAQARAAAEANIABAJIAAAQIAAgQQAJgNANAJQAHAHABAIQANgCAHAGQAHAGgHAtIgLA2QgDAHACAhgAA+gJIAAgJIgBgLIABALIAAAJg");
        this.shape_1.setTransform(8.5, 12);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 17, 24);


    (lib.shape87 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
        this.shape.setTransform(6.7, 10.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
        this.shape_1.setTransform(6.7, 11);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 13.5, 21.9);


    (lib.shape84 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#AAAAAA").ss(1, 0, 0, 3, true).p("AD6j5IAAHzInzAAIAAnzg");
        this.shape.setTransform(25, 25);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#E6E6E6").s().p("Aj5D6IAAnzIHzAAIAAHzg");
        this.shape_1.setTransform(25, 25);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 50);


    (lib.shape82 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AMPubI4cAAQiOAAAACNIAAYdQAACNCOAAIYcAAQCNAAAAiNIAA4dQAAiNiNAAg");
        this.shape.setTransform(93.3, 93.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AsNOcQiOAAAAiOIAA4cQAAiMCOgBIYbAAQCOABAACMIAAYcQAACOiOAAg");
        this.shape_1.setTransform(93.3, 93.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AsVOkQiOAAAAiOIAA4rQAAiOCOAAIYrAAQCOAAAACOIAAYrQAACOiOAAgAubsOIAAYcQAACOCOAAIYbAAQCOAAAAiOIAA4cQAAiMiOgBI4bAAQiOABAACMg");
        this.shape_2.setTransform(93.3, 93.3);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 186.5, 186.5);


    (lib.shape81 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 0, 0, 3, true).p("AaAy5MgyNAAAQhyAAAAByMAAAAkBMAyMAAAQBzAAAAhyg");
        this.shape.setTransform(166.4, 121);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A5/S6MAAAgkAQAAhzByAAMAyNAAAMAAAAkAQAABzhzAAg");
        this.shape_1.setTransform(166.4, 121);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 332.9, 242);


    (lib.shape78 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#A6D9CE", "#E2F3EF"], [0, 1], -319.9, 0, 320, 0).s().p("Egx/AlfMAAAhK+MBj/AAAMAAABK+g");
        this.shape.setTransform(320.4, 240);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0.4, 0, 640, 480);


    (lib.shape72 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#CAA202").ss(1, 0, 0, 3, true).p("AgmATIgWgeIAlgOIAXgfIAYAfIAlAOIgWAeIgBAoIgmgLIgkALg");
        this.shape.setTransform(6.2, 5.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FFCC00", "#CAA202"], [0, 1], 0, 0.1, 0, 0, 0.1, 7).s().p("AAAAvIglALIgBgoIgWgeIAlgOIAXgfIAYAfIAlAOIgWAeIgBAog");
        this.shape_1.setTransform(6.2, 5.9);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 12.3, 11.7);


    (lib.shape71 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B0CCD7").s().p("AgFBrIAAjVIALAAIAADVg");
        this.shape.setTransform(252.6, 15.6);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(251.9, 4.8, 1.3, 21.5);


    (lib.shape67 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(0,48,102,0.2)").ss(1, 0, 0, 3).p("A+RiVQAnB2A2BGIAEAFIAYAdQBPBUBkgIMAzLAAAQBkAIBPhUIAYgdIAEgFQA2hGAnh2Mgt0AAAg");
        this.shape.setTransform(320, 14.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#F1F1F1").s().p("AZmCVMgzLAAAQhjAIhPhUIgZgdIgDgFQg3hGgnh2IOvAAMAt0AAAQgnB2g2BGIgEAFIgZAdQhIBNhaAAIgQgBg");
        this.shape_1.setTransform(320, 14.6);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(126.2, -0.4, 387.7, 30.1);


    (lib.shape64 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#C2E5E1", "#ECF7F5"], [0, 1], -319.9, 0, 320, 0).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
        this.shape.setTransform(320, 240);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 480);


    (lib.shape61UpOverDownHit = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(153,255,255,0)").ss(1, 0, 0, 3).p("EApuAUyMhTbAAAMAAAgpjMBTbAAAg");
        this.shape.setTransform(267, 133);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,0,0,0)").s().p("EgptAUyMAAAgpjMBTaAAAMAAAApjg");
        this.shape_1.setTransform(267, 133);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 266);


    (lib.shape57UpOverDownHit = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(63,130,125,0)").s().p("Egx/ACVIAAkqMBj+AAAIAAEqg");
        this.shape.setTransform(320, 15);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 30);


    (lib.shape53UpOverDownHit = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(204,204,204,0)").ss(1, 0, 0, 3, true).p("AKKiVIAAErI0TAAIAAkrg");
        this.shape.setTransform(0, 0.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,0,0,0)").s().p("AqICVIAAkpIURAAIAAEpg");
        this.shape_1.setTransform(0, 0.5);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-64.9, -14.4, 130, 30);


    (lib.shape49 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(lib.loader.getResult("image48")).s().p("EgptAUyMAAAgpjMBTaAAAMAAAApjg");
        this.shape.setTransform(267, 133);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 266);


    (lib.shape45 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(lib.loader.getResult("image44")).s().p("Egp3AT/MAAAgn+MBTvAAAMAAAAn+g");
        this.shape.setTransform(268, 128);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 536, 256);


    (lib.shape35 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#E34502").ss(1, 0, 0, 3, true).p("ABrBrIjVAAIAAjVIDVAAg");

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B32200").s().p("AhqBrIAAjVIDVAAIAADVg");

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-10.6, -10.6, 21.5, 21.5);


    (lib.shape34 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#FEB89A").ss(1, 0, 0, 3, true).p("AhqhqIDVAAIAADVIjVAAg");
        this.shape.setTransform(10.7, 10.7);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 21.5, 21.5);


    (lib.shape33 = function () {
        this.initialize();

        // Layer 5
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#993300").s().p("AhMBNIAAiYICYAAIAACYg");
        this.shape.setTransform(-138.5, 31.2);

        // Layer 4
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#993300").s().p("AhMBMIAAiXICYAAIAACXg");
        this.shape_1.setTransform(-92.1, 15.7);

        // Layer 3
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#993300").s().p("AhMBMIAAiXICYAAIAACXg");
        this.shape_2.setTransform(-92.1, 15.7);

        // Layer 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#993300").s().p("AhMBMIAAiXICYAAIAACXg");
        this.shape_3.setTransform(-107.6, 15.7);

        // Layer 1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("ADnmBICbAAIAACbIibAAIiaAAIiYAAIAAibICYAAIAACbIAACaICaAAICbAAIAACZIibAAIAAiZIAAiagAGCjmIAACaABNmBICaAAAK2hMIAAiaIAAibICaAAIAACbIiaAAANQmBICbAAIAACbIAACaIibAAIAAiaICbAAICaAAIAACaIiaAAASFmBIAACbICaAAIAAibICbAAIAACbAPrmBICaAAICaAAAW6hMIibAAIAAiaICbAAIAACaIAACZAUfhMIAACZIiaAAIAAiZgAK2hMICaAAIAACZASFGCIAAiaICaAAIAACaIiaAAIiaAAIAAiaIibAAIAAibICbAAIAACbICaAAIAAibIiaAAIAAiZAUfDoICbAAIAACaIibAAAUfBNIAACbAUfBNICbAAIAACbAPrGCIibAAIAAiaAK2DoIAAibICaAAANQGCIiaAAIAAiaICaAAAGCBNIAACbIibAAIAAibAhLGCIAAiaIibAAIAAibICbAAICYAAIAACbIiYAAIAAibAGCDoIAACaIibAAIAAiaIiaAAIAACaIiYAAIibAAIiaAAIAAiaADnGCIiaAAABNBNICaAAAK2BNIAAiZAmAhMICaAAICbAAICYAAIAACZAvpmBIAACbICaAAIAACaIiaAAIAACZIibAAIAAiZIAAiaICbAAIAACaIibAAIiaAAIAAiaIAAibICaAAIAACbIiaAAA25hMICbAAIAACZIibAAgA25jmIAACaA0emBIibAAIAACbICbAAAvpmBICaAAIAACbAyEmBICbAAAq0jmIAACaIibAAIAACZIiaAAIAACbIibAAIAAibIiaAAIAACbAtPmBICbAAIAACbIibAAAmAjmIAAibICaAAIAACbgAmAhMIAAiaAjmjmIAACaIAACZIiaAAIAAiZAjmjmICbAAIAACaIAACZAjmmBICbAAAjmDoIiaAAIAAibAjmGCIAAiaAq0DoIAACaIibAAIAAiaIAAibICbAAIAACbIibAAAvpGCIAAiaICaAAAtPGCIiaAAIibAAA25DoICbAAICaAAIAACaIiaAAIAAiaA25DoIAAibA0eGCIibAAIAAiaAq0hMIAACZ");
        this.shape_4.setTransform(0.4, 0.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#DAE9E3").s().p("AUfGCIAAiaIibAAIAAibIiaAAIAAiZIAACZICaAAIAACbIiaAAIAAibIiaAAIAAiZIAACZIAACbICaAAIAACaIiaAAIAAiaIiaAAICaAAIAACaIiaAAIAAiaIAAibICaAAIiaAAIAAiZICaAAIiaAAIAAiaIAAiaICaAAIAACaIiaAAICaAAIAAiaICaAAIAACaIiaAAIAACaICaAAICaAAIAAiaIiaAAIAAiaICaAAICbAAIAACaIAAiaICbAAIAACaIibAAIibAAICbAAIAACaICbAAIibAAIAAiaICbAAIAACaIAACZIibAAIAAiZIibAAIAACZICbAAICbAAIAACbIibAAIAAibIAACbICbAAIAACagASEjmIAAiagAUfGCIibAAIAAiaICbAAIAACagASEGCIiaAAIAAiaIiaAAIAAibICaAAIAACbICaAAIAACagADnGCIAAiaIiaAAIAAibIiZAAIAAiZICZAAIAACZIAAiZIiZAAIAAiaIiaAAICaAAIAACaIiaAAIAAiaIAAiaICaAAICZAAIAACaIiZAAIAAiaIAACaICZAAIAACaICaAAIAACZICbAAIAACbIibAAIAAibIiaAAICaAAIAACbICbAAIAACagABNGCIiZAAIAAiaIiaAAIAAibICaAAIAACbICZAAIAACaIAAiaICaAAIAACagAjmGCIAAiaIibAAICbAAIAACaIibAAIAAiaIAAibICbAAIAAiZICaAAIAACZIiaAAIAACbICaAAIAACagAtPGCIAAiaICbAAIAACagAvpGCIAAiaICaAAIAACagAvpGCIibAAIAAiaIiaAAIAAibIAACbIibAAIAAibIAAiZICbAAIAACZIibAAICbAAIAAiZIibAAIAAiaICbAAIAACaICaAAIAACZICbAAIAAiZICaAAICbAAIAACZIibAAIAAiZIAACZIiaAAIAACbIibAAIAAibIiaAAICaAAIAACbICbAAIAAibICaAAIAACbIiaAAIAACagA0eGCIAAiaIAACaIibAAIAAiaICbAAICaAAIAACagAUfDogASEDogASEDogAPqDogANQDogABNDogABNDogAhMDoIAAibICZAAIAACbgABNDogAtPDoIAAibICbAAIAACbgAtPDogAtPDogA25DogASEBNIAAiZICbAAIAACZgAUfBNgANQBNgADnBNIAAiZICbAAIAACZgADnBNgAhMBNgAmBBNIAAiZICbAAIAACZgAtPBNgAtPBNgAyEBNIAAiZICbAAIAACZgAUfhMgAPqhMIAAiaICaAAIAACagAPqhMgANQhMIAAiaICaAAIAACagAGChMIibAAIAAiaICbAAIAACagADnhMgADnhMIiaAAIAAiaICaAAIAACagAjmhMgAmBhMIAAiaICbAAIAACagAtPhMIAAiaIiaAAIAAiaICaAAIAACaIAAiaICbAAIAACaIibAAICbAAIAACagAtPhMgAtPhMIiaAAIAAiaIibAAIAAiaICbAAIAACaICaAAIAACagAyEhMIAAiaICbAAIAACagAyEhMgA0ehMIAAiaIAAiaICaAAIAACaIiaAAICaAAIAACagAUfjmgAPqjmgADnjmIAAiaICbAAIAACagABNjmIAAiaICaAAIAACagABNjmgAjmjmgAjmjmIibAAIAAiaICbAAIAACagAyEjmgAyEjmgA0ejmgA25jmIAAiaICbAAIAACagAjmmAgA0emAg");
        this.shape_5.setTransform(0.4, 0.3);

        this.addChild(this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-146.2, -38.3, 293.2, 77.2);


    (lib.shape31 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("rgba(255,255,255,0.102)").ss(1, 0, 0, 3, true).p("AIep/Iw7AAQhiAAAABiIAAQ7QAABiBiAAIQ7AAQBiAAAAhiIAAw7QAAhihiAAg");
        this.shape.setTransform(65.5, 65.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#AFCFC6").s().p("AodKAQhiAAAAhiIAAw7QAAhiBiAAIQ7AAQBiAAAABiIAAQ7QAABihiAAg");
        this.shape_1.setTransform(65.5, 65.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#98C2B8").s().p("AopKOQhkAAAAhkIAAxTQAAhkBkAAIRTAAQBkAAAABkIAARTQAABkhkAAgAp/odIAAQ7QAABiBiAAIQ7AAQBiAAAAhiIAAw7QAAhihiAAIw7AAQhiAAAABig");
        this.shape_2.setTransform(65.5, 65.5);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 131, 131);


    (lib.shape29OverDown = function () {
        this.initialize();

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D8735A").s().p("AABBLQgEgDgBgHQgBgHAFgGQADgGAIgCIANACQAGAEAAAHQABAHgFAGIgMAHgAgKAZIgCgIIAAgMQABgFAEgEIALgVQAKgOAAgHQgCgOgSAEQgKAEgKAKIgNgRQANgMAXgFIAdABQAMAHACAPQABAKgEAJQgDAIgKAKQgKAMgCAGQgEAHABAIIADAHIgTAFg");
        this.shape.setTransform(55.5, -6.7);

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#4D8FAA").ss(0.5, 0, 0, 3).p("AiNjEQASAtACBYQACBXgGA2QgFA2gCAxQCWgRBaAfQgHgMAWikQAXiygCgnIiTAHg");
        this.shape_1.setTransform(55.8, -3.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFFFF", "#C6E8EE"], [0, 0.745], 0.2, 6.2, 0.5, -10.7).s().p("AiFC3QACgxAFg2QAGg3gChWQgChYgSgtICKAFICTgHQACAmgXCzQgWCkAHAMQhaggiWASg");
        this.shape_2.setTransform(55.9, -4.1);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(41.6, -23.9, 28.7, 39.5);


    (lib.shape28OverDown = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#89BED3", "#34758F"], [0.471, 1], -0.3, -25.8, -0.3, 19.8).s().p("AsYDRQgzAAAAgyIAAk9QAAgyAzAAIYxAAQAzAAAAAyIAAE9QAAAygzAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-84.3, -20.9, 168.8, 41.9);


    (lib.shape27Up = function () {
        this.initialize();

        // Layer 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D8735A").s().p("AgvBCQgDgHADgGQACgGAHgDIAPgCIALAIQADAGgDAHQgCAGgIAEIgOAAQgHgCgEgFgAghAUIgBgFIACgIIAGgIIAJgIIAUgMQAPgIADgGQAGgOgVgFIgWADIgDgVIAnABQARAEAJALQAHAMgFAOQgEAKgIAGQgGAGgOAEQgPAEgDAGQgHAEgDAIIgBAHg");
        this.shape.setTransform(55.6, -2);

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#4D8FAA").ss(0.5, 0, 0, 3).p("AhEieQgBgPgHgSQA+ARBDAOIBrAUQAIBCgvBFQgwBEgHArQgHAsAOAlQhQgwiZgMQgCgwAuhDQAwhDAAhHg");
        this.shape_1.setTransform(54.2, 0.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#FFFFFF", "rgba(224,249,249,0.702)"], [0, 0.745], -0.3, 3.7, 3.1, -12.8).s().p("AigCBQgCgwAuhDQAwhDAAhHIAAggQgBgPgHgRQA+AQBDAOIBrAVQAIBBgvBGQgwBEgHAqQgHAsAOAlQhQgwiZgMg");
        this.shape_2.setTransform(54.2, 0);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(38.1, -18.9, 32.3, 38);


    (lib.shape25Up = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#69ADC9", "#34758F"], [0.471, 1], -0.3, -19.4, -0.3, 26.2).s().p("AsYDRQgzAAAAgyIAAk9QAAgyAzAAIYxAAQAzAAAAAyIAAE9QAAAygzAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-84.3, -20.9, 168.8, 41.9);


    (lib.shape23OverDown = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#3A6F01").ss(0.5, 0, 0, 3).p("Aihg9IA9BTIgcBtIBqggIBdA7IABhsIBZhCIhqgoIgmhlIhEBVg");
        this.shape.setTransform(27.9, -0.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FEDE5F", "#FDD73E", "#AD821F"], [0, 0.302, 1], -1.2, 0.5, 0, -1.2, 0.5, 15.4).s().p("AgWBjIhpAgIAchtIg9hUIBugKIBEhVIAlBlIBqAoIhYBCIgBBsg");
        this.shape_1.setTransform(27.9, -0.4);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(11.7, -16.2, 32.4, 31.7);


    (lib.shape22OverDown = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#63C102", "#305B02"], [0.369, 1], 166.1, -30.3, 166.1, 20.8).s().p("An/DRQgyAAAAgyIAAk9QAAgyAyAAIP/AAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56.2, -20.9, 112.6, 41.9);


    (lib.shape21Up = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#3A6F01").ss(0.5, 0, 0, 3).p("AiSgfIA0BNIAEBfIBagZIBbAZIAEhfIA0hNIhYghIg7hKIg6BKg");
        this.shape.setTransform(26.3, -1.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.rf(["#FEDE5F", "#FDD73E", "#AD821F"], [0, 0.302, 1], -0.3, 1.2, 0, -0.3, 1.2, 16.7).s().p("AAABzIhaAZIgEhfIg0hNIBYghIA6hKIA7BKIBYAhIg0BNIgEBfg");
        this.shape_1.setTransform(26.3, -1.6);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(11.5, -15.7, 29.6, 28.1);


    (lib.shape18Up = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#52A001", "#305B02"], [0.369, 1], 165.6, -25.3, 165.6, 25.8).s().p("An/DRQgyAAAAgyIAAk9QAAgyAyAAIP/AAQAyAAAAAyIAAE9QAAAygyAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56.2, -20.9, 112.6, 41.9);


    (lib.shape13 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.bf(lib.loader.getResult("image12")).s().p("EgyJAlqMAAAhLTMBkTAAAMAAABLTg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-320.9, -240.9, 642, 482);


    (lib.shape11 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#9CCCC0", "#449987"], [0, 1], -2.9, -120.1, 0, -2.9, -120.1, 408.9).s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-319.9, -239.9, 640, 480);


    (lib.shape8 = function () {
        this.initialize();

        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#C2E5E1", "#ECF7F5"], [0, 1], -319.9, 0, 320, 0).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
        this.shape.setTransform(320, 240);

        // Layer 2
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["rgba(0,0,0,0.502)", "rgba(1,1,1,0)"], [0, 1], 0, -239.9, 0, 240).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
        this.shape_1.setTransform(320, 240);

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.rf(["#0066CC", "#003366"], [0, 1], -20.8, 238.2, 0, -20.8, 238.2, 556.8).s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
        this.shape_2.setTransform(320, 240);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 480);


    (lib.shape6 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,102,255,0.498)").s().p("AgsAtIAAhZIBZAAIAABZg");
        this.shape.setTransform(14, 14);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(9.5, 9.5, 9.1, 9.1);


    (lib.BoardCenter = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape140("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-61.8, -61.8, 123.7, 123.7);


    (lib.BoardCorner = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape138("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 84, 86.1);


    (lib.BoardLeftSide = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape136("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -61.8, 123.7, 123.7);


    (lib.BoardTopSide = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape134("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-61.8, 0, 123.7, 123.7);


    (lib.EndGameBox = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.text132("synched", 0);
        this.instance.setTransform(-4.6, -8.9, 0.998, 1.002);

        // Layer 1
        this.instance_1 = new lib.shape121("synched", 0);
        this.instance_1.setTransform(0, 0, 1, 0.676);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-77.9, -22.9, 156, 51.2);


    (lib.EndTrialBox = function () {
        this.initialize();

        // Layer 3
        this.tilesField = new cjs.Text("88 tiles\n ", "bold 16px Trebuchet MS", "#0099FF");
        this.tilesField.lineHeight = 16;
        this.tilesField.lineWidth = 64;
        this.tilesField.setTransform(-1.3, -10.9, 0.999, 1.003);

        // Layer 2
        this.instance = new lib.text124("synched", 0);
        this.instance.setTransform(-54.3, -8.9, 0.999, 1.002);

        // Layer 1
        this.instance_1 = new lib.shape121("synched", 0);
        this.instance_1.setTransform(0, 0, 1, 0.676);

        this.addChild(this.instance_1, this.instance, this.tilesField);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-77.9, -22.9, 156, 51.2);


    (lib.redX = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape114("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-42.3, -42.1, 84.8, 84.2);


    (lib.timer_mc = function () {
        this.initialize();

        // Layer 4
        this.myTime = new cjs.Text("33", "bold 18px Trebuchet MS", "#990000");
        this.myTime.lineHeight = 18;
        this.myTime.lineWidth = 43;
        this.myTime.setTransform(97, -0.4);

        // Layer 3
        this.instance = new lib.shape71("synched", 0);
        this.instance.setTransform(-90.1, -0.4, 0.923, 1);

        // Layer 2
        this.instance_1 = new lib.text111("synched", 0);
        this.instance_1.setTransform(47.2, 2.7);

        // Layer 1
        this.instance_2 = new lib.shape110("synched", 0);

        this.addChild(this.instance_2, this.instance_1, this.instance, this.myTime);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -1.1, 143.8, 45.8);


    (lib.sprite97 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape96("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 480);


    (lib.sprite95 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape94("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 280.9, 46.3);


    (lib.sprite91 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape90("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 17, 24);


    (lib.sprite88 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape87("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 13.5, 21.9);


    (lib.sprite85 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape84("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 50);


    (lib.sprite83 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape82("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 186.5, 186.5);


    (lib.sprite73 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape72("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 12.3, 11.7);


    (lib.sprite50 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape49("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 266);


    (lib.sprite46 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape45("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 536, 256);


    (lib.sprite42 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.text41("synched", 0);
        this.instance.setTransform(-10.7, -7.7, 3.6, 3.6);
        this.instance.shadow = new cjs.Shadow("#333333", 0, 1, 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-17.9, -21.4, 463.3, 110.6);


    (lib.sprite36 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape35("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-10.6, -10.6, 21.5, 21.5);


    (lib.sprite32 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape31("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 131, 131);


    (lib.sprite14 = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape13("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-320.9, -240.9, 642, 482);


    (lib.sprite10 = function () {
        this.initialize();

        // Layer 3
        this.instance = new lib.shape8("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 480);


    (lib.BgAnimParticle = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shape6("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(9.5, 9.5, 9.1, 9.1);


    (lib.continue_btn = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.shape21Up("synched", 0);
        this.instance.setTransform(21.7, 0);

        this.instance_1 = new lib.text144Up("synched", 0);
        this.instance_1.setTransform(-74.9, -10.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance}
        ]}).to({state: [
                {t: this.instance_1}
            ]}, 1).to({state: [
                {t: this.instance_1}
            ]}, 1).to({state: []}, 1).wait(1));

        // Layer 2
        this.instance_2 = new lib.text144Up("synched", 0);
        this.instance_2.setTransform(-74.9, -10.9);

        this.instance_3 = new lib.shape145OverDown("synched", 0);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance_2}
        ]}).to({state: [
                {t: this.instance_3}
            ]}, 1).to({state: [
                {t: this.instance_3}
            ]}, 1).to({state: []}, 1).wait(1));

        // Layer 1
        this.instance_4 = new lib.shape143Up("synched", 0);

        this.instance_5 = new lib.shape146Hit("synched", 0);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance_4}
        ]}).to({state: []}, 1).to({state: []}, 1).to({state: [
                {t: this.instance_5}
            ]}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-80.2, -20.9, 160.6, 52);


    (lib.done_btn = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 3
        this.instance = new lib.text103Up("synched", 0);
        this.instance.setTransform(-73.3, -10.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).to({_off: true}, 1).wait(1));

        // Layer 2
        this.instance_1 = new lib.shape102Up("synched", 0);

        this.instance_2 = new lib.shape104OverDown("synched", 0);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance_1}
        ]}).to({state: [
                {t: this.instance_2}
            ]}, 1).to({state: [
                {t: this.instance_2}
            ]}, 1).to({state: []}, 1).wait(1));

        // Layer 1
        this.instance_3 = new lib.shape105Hit("synched", 0);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).wait(1).to({startPosition: 0, _off: false}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-75.9, -20.9, 152.1, 52);


    (lib.PromoButton = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.shape61UpOverDownHit("synched", 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 534, 266);


    (lib.button60 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.text59UpOverDownHit("synched", 0);
        this.instance.setTransform(27, 3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

        // Layer 1
        this.instance_1 = new lib.shape57UpOverDownHit("synched", 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 671.1, 47);


    (lib.PlayAgainButton = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.text55UpOverDownHit("synched", 0);
        this.instance.setTransform(-76.7, -14.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

        // Layer 1
        this.instance_1 = new lib.shape53UpOverDownHit("synched", 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1).to({startPosition: 0}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.4, -18.8, 156.6, 62);

    (lib.start_btn = function () {
        var startButtonSpriteSheet = new cjs.SpriteSheet({
            //images: ["assets/images/startButton.png"],
            images: [lib.loader.getResult("startButtonSS")],
            frames: {
                height: 42,
                width: 114,
                regX: 56,
                regY: 21,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.initialize(startButtonSpriteSheet);
        var startButtonHelper = new cjs.ButtonHelper(this, "up", "over", "down");
    }).prototype = p = new cjs.BitmapAnimation();
    p.nominalBounds = new cjs.Rectangle(-56.2, -20.9, 112.6, 52);

    (lib.howto_btn = function () {
        var helpButtonSpriteSheet = new cjs.SpriteSheet({
            images: [lib.loader.getResult("helpButtonSS")],
            frames: {
                height: 47,
                width: 170,
                regX: 85,
                regY: 24,
                count: 4},
            animations: {up: 0, over: 1, down: 2, hit: 3}
        });
        this.initialize(helpButtonSpriteSheet);
        var helpButtonHelper = new cjs.ButtonHelper(this, "up", "over", "down");
    }).prototype = p = new cjs.BitmapAnimation();
    p.nominalBounds = new cjs.Rectangle(-84.3, -20.9, 168.8, 52.5);


    (lib.comlumoslabsgamesmemoryMatrixBoard = function () {
        this.initialize();

        // Layer 17
        this.bottomSide = new lib.BoardTopSide();
        this.bottomSide.setTransform(0, 240, 1, 1, 180);

        // Layer 15
        this.topSide = new lib.BoardTopSide();
        this.topSide.setTransform(0, -239.9);

        // Layer 13
        this.rightSide = new lib.BoardLeftSide();
        this.rightSide.setTransform(320, 0, 1, 1, 180);

        // Layer 11
        this.leftSide = new lib.BoardLeftSide();
        this.leftSide.setTransform(-319.9, 0);

        // Layer 9
        this.topRightCorner = new lib.BoardCorner();
        this.topRightCorner.setTransform(320, -239.9, 1, 1, 90);

        // Layer 7
        this.bottomRightCorner = new lib.BoardCorner();
        this.bottomRightCorner.setTransform(320, 240, 1, 1, 180);

        // Layer 5
        this.bottomLeftCorner = new lib.BoardCorner();
        this.bottomLeftCorner.setTransform(-319.9, 240, 1, 1, -89.9);

        // Layer 3
        this.topLeftCorner = new lib.BoardCorner();
        this.topLeftCorner.setTransform(-319.9, -239.9);

        // Layer 1
        this.center = new lib.BoardCenter();

        this.addChild(this.center, this.topLeftCorner, this.bottomLeftCorner, this.bottomRightCorner, this.topRightCorner, this.leftSide, this.rightSide, this.topSide, this.bottomSide);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-319.9, -239.9, 640, 480);


    (lib.PerfectEndGameBox = function () {
        this.initialize();

        // Layer 5
        this.instance = new lib.sprite73();
        this.instance.setTransform(55, -18.9);

        // Layer 4
        this.instance_1 = new lib.text128("synched", 0);
        this.instance_1.setTransform(-5.6, 4, 0.999, 1.002);

        // Layer 3
        this.bonusField = new cjs.Text("+2225 ", "bold 16px Trebuchet MS", "#990000");
        this.bonusField.lineHeight = 16;
        this.bonusField.lineWidth = 63;
        this.bonusField.setTransform(-5.9, -23.9, 1, 1.003);

        // Layer 2
        this.instance_2 = new lib.text122("synched", 0);
        this.instance_2.setTransform(-67.4, -21.9, 1, 1.002);

        // Layer 1
        this.instance_3 = new lib.shape121("synched", 0);

        this.addChild(this.instance_3, this.instance_2, this.bonusField, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-77.9, -33.9, 156, 75.2);


    (lib.PerfectEndTrialBox = function () {
        this.initialize();

        // Layer 6
        this.instance = new lib.sprite73();
        this.instance.setTransform(55, -18.9);

        // Layer 5
        this.tilesField = new cjs.Text("88 tiles\n ", "bold 16px Trebuchet MS", "#0099FF");
        this.tilesField.lineHeight = 16;
        this.tilesField.lineWidth = 64;
        this.tilesField.setTransform(-1.3, 2, 0.999, 1.003);

        // Layer 4
        this.instance_1 = new lib.text124("synched", 0);
        this.instance_1.setTransform(-54.3, 4, 0.999, 1.002);

        // Layer 3
        this.bonusField = new cjs.Text("+2225 ", "bold 16px Trebuchet MS", "#990000");
        this.bonusField.lineHeight = 16;
        this.bonusField.lineWidth = 63;
        this.bonusField.setTransform(-5.9, -23.9, 1, 1.003);

        // Layer 2
        this.instance_2 = new lib.text122("synched", 0);
        this.instance_2.setTransform(-67.4, -21.9, 1, 1.002);

        // Layer 1
        this.instance_3 = new lib.shape121("synched", 0);

        this.addChild(this.instance_3, this.instance_2, this.bonusField, this.instance_1, this.tilesField, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-77.9, -33.9, 156, 75.2);

     //sprite120
    (lib.score_mc = function () {
        this.initialize();

        // Layer 5
        this.instance = new lib.sprite73();
        this.instance.setTransform(24.4, 7.7);

        // Layer 4
        this.instance_1 = new lib.shape71("synched", 0);
        this.instance_1.setTransform(-251.8, -0.5);

        // Layer 3
        this.myScore = new cjs.Text("9000", "bold 18px Trebuchet MS", "#990A37");
        this.myScore.lineHeight = 18;
        this.myScore.lineWidth = 77;
        this.myScore.setTransform(97.5, 0.1);

        // Layer 2
        this.instance_2 = new lib.text118("synched", 0);
        this.instance_2.setTransform(13.2, 2.7);

        // Layer 1
        this.instance_3 = new lib.shape117("synched", 0);

        this.addChild(this.instance_3, this.instance_2, this.myScore, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -1.1, 178.2, 45.8);


    (lib.InactiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.sprite85();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 50);


    (lib.comlumoslabsgamesmemoryMatrixscreensPlayScreen = function () {
        this.initialize();

        // Layer 14
        this.trialField = new cjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
        this.trialField.lineHeight = 18;
        this.trialField.lineWidth = 30;
        this.trialField.setTransform(316.4, 1.7);

        // Layer 13
        this.levelField = new cjs.Text("88 ", "bold 18px Trebuchet MS", "#990000");
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
        this.scoreField = new cjs.Text("9000", "bold 18px Trebuchet MS", "#990000");
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
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -0.6, 648.9, 480.7);


    (lib.comlumoslabsgamesmemoryMatrixscreensPromoEndScreen = function () {
        this.initialize();

        // Layer 18
        this.promoButton = new lib.PromoButton();
        this.promoButton.setTransform(53, 125);
        new cjs.ButtonHelper(this.promoButton, 0, 1, 2, false, new lib.PromoButton(), 3);

        // Layer 15
        this.surveyButton = new lib.button60();
        this.surveyButton.setTransform(0, 450);
        new cjs.ButtonHelper(this.surveyButton, 0, 1, 2, false, new lib.button60(), 3);

        // Layer 12
        this.continueButton = new lib.PlayAgainButton();
        this.continueButton.setTransform(320, 425);
        new cjs.ButtonHelper(this.continueButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

        // Layer 11
        this.levelField = new cjs.Text("8 tiles", "bold 16px Trebuchet MS", "#0099FF");
        this.levelField.lineHeight = 16;
        this.levelField.lineWidth = 91;
        this.levelField.setTransform(150, 193);

        // Layer 10
        this.scoreField = new cjs.Text("00000", "bold 16px Trebuchet MS", "#0099FF");
        this.scoreField.lineHeight = 16;
        this.scoreField.lineWidth = 107;
        this.scoreField.setTransform(150, 223);

        // Layer 8
        this.instance = new lib.sprite50();
        this.instance.setTransform(53, 125);
        this.instance.shadow = new cjs.Shadow("rgba(153,153,153,1)", 1, 1, 3);

        // Layer 6
        this.instance_1 = new lib.sprite42();
        this.instance_1.setTransform(148.6, 69.6);

        // Layer 1
        this.instance_2 = new lib.sprite10();
        this.instance_2.setTransform(0.4, -0.5);

        this.addChild(this.instance_2, this.instance_1, this.instance, this.scoreField, this.levelField, this.continueButton, this.surveyButton, this.promoButton);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -0.5, 671.1, 497.5);


    (lib.comlumoslabsgamesmemoryMatrixscreensPromoStartScreen = function () {
        this.initialize();

        // Layer 17
        this.instance = new lib.sprite46();
        this.instance.setTransform(53, 125);
        this.instance.shadow = new cjs.Shadow("#999999", 1, 1, 3);

        // Layer 15
        this.instance_1 = new lib.sprite42();
        this.instance_1.setTransform(140, 69.6);

        // Layer 10
        this.helpButton = new lib.howto_btn();
        this.helpButton.setTransform(258.8, 439.1);
        new cjs.ButtonHelper(this.helpButton, 0, 1, 2, false, new lib.howto_btn(), 3);

        // Layer 6
        this.startButton = new lib.start_btn();
        this.startButton.setTransform(409.4, 439.1);
        new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.start_btn(), 3);

        // Layer 1
        this.instance_2 = new lib.sprite10();
        this.instance_2.setTransform(0.4, 0);

        this.addChild(this.instance_2, this.startButton, this.helpButton, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0.4, 0, 640, 480);


    (lib.sprite37 = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.sprite36();
        this.instance.setTransform(10.7, 10.7);

        // Layer 1
        this.instance_1 = new lib.shape34("synched", 0);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 21.5, 21.5);


    (lib.sprite15 = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.sprite14();
        this.instance.setTransform(-0.9, -0.9);
        this.instance.alpha = 0.238;

        // Layer 1
        this.instance_1 = new lib.shape11("synched", 0);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-321.9, -241.9, 642, 482);


    (lib.comlumoslabsgamesmemoryMatrixscreensEndScreen = function () {
        this.initialize();

        // Layer 27
        this.instance = new lib.text108("synched", 0);
        this.instance.setTransform(217.5, 173);

        // Layer 26
        this.instance_1 = new lib.shape107("synched", 0);

        // Layer 24
        this.instance_2 = new lib.sprite42();
        this.instance_2.setTransform(40, 70, 1.546, 1.546);

        // Layer 21
        this.surveyButton = new lib.button60();
        this.surveyButton.setTransform(0, 450);
        new cjs.ButtonHelper(this.surveyButton, 0, 1, 2, false, new lib.button60(), 3);

        // Layer 17
        this.continueButton = new lib.done_btn();
        this.continueButton.setTransform(313.4, 373);
        new cjs.ButtonHelper(this.continueButton, 0, 1, 2, false, new lib.done_btn(), 3);

        // Layer 16
        this.levelField = new cjs.Text("8 tiles  ", "18px Trebuchet MS", "#0099FF");
        this.levelField.lineHeight = 18;
        this.levelField.lineWidth = 67;
        this.levelField.setTransform(325, 250, 1.001, 1);

        // Layer 15
        this.scoreField = new cjs.Text("88888  ", "18px Trebuchet MS", "#0099FF");
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
        this.instance_5.shadow = new cjs.Shadow("rgba(153,153,153,1)", 0, 0, 5);

        // Layer 9
        this.instance_6 = new lib.sprite95();
        this.instance_6.setTransform(178.1, 256.6, 1.011, 1);
        this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)", 1, 5, 5);

        // Layer 6
        this.instance_7 = new lib.sprite15();
        this.instance_7.setTransform(320, 240);

        // Layer 1
        this.instance_8 = new lib.sprite10();
        this.instance_8.setTransform(0.4, -0.5);

        this.addChild(this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.scoreField, this.levelField, this.continueButton, this.surveyButton, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1.9, -1.9, 730.3, 498.9);


    (lib.ActiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.sprite37();
        this.instance.setTransform(0, 0, 2.33, 2.33);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 50, 50);


    (lib.sprite38 = function () {
        this.initialize();

        // Layer 52
        this.instance = new lib.sprite37();
        this.instance.setTransform(84.8, -23.1, 0.72, 0.72);

        // Layer 49
        this.instance_1 = new lib.sprite37();
        this.instance_1.setTransform(100.3, -38.5, 0.72, 0.72);

        // Layer 46
        this.instance_2 = new lib.sprite37();
        this.instance_2.setTransform(69.4, 7.8, 0.72, 0.72);

        // Layer 43
        this.instance_3 = new lib.sprite37();
        this.instance_3.setTransform(131.2, 23.2, 0.72, 0.72);

        // Layer 40
        this.instance_4 = new lib.sprite37();
        this.instance_4.setTransform(69.4, -7.6, 0.72, 0.72);

        // Layer 37
        this.instance_5 = new lib.sprite37();
        this.instance_5.setTransform(-38.5, 23.2, 0.72, 0.72);

        // Layer 34
        this.instance_6 = new lib.sprite37();
        this.instance_6.setTransform(-38.5, 7.8, 0.72, 0.72);

        // Layer 31
        this.instance_7 = new lib.sprite37();
        this.instance_7.setTransform(7.8, -23.1, 0.72, 0.72);

        // Layer 28
        this.instance_8 = new lib.sprite37();
        this.instance_8.setTransform(-7.6, -23.1, 0.72, 0.72);

        // Layer 25
        this.instance_9 = new lib.sprite37();
        this.instance_9.setTransform(7.8, -38.5, 0.72, 0.72);

        // Layer 22
        this.instance_10 = new lib.sprite37();
        this.instance_10.setTransform(-100.2, 7.8, 0.72, 0.72);

        // Layer 19
        this.instance_11 = new lib.sprite37();
        this.instance_11.setTransform(-100.2, -7.6, 0.72, 0.72);

        // Layer 16
        this.instance_12 = new lib.sprite37();
        this.instance_12.setTransform(-100.2, -23.1, 0.72, 0.72);

        // Layer 13
        this.instance_13 = new lib.sprite37();
        this.instance_13.setTransform(-84.8, -38.5, 0.72, 0.72);

        // Layer 10
        this.instance_14 = new lib.sprite37();
        this.instance_14.setTransform(-146.5, 23.2, 0.72, 0.72);

        // Layer 7
        this.instance_15 = new lib.sprite37();
        this.instance_15.setTransform(-131.1, 7.8, 0.72, 0.72);

        // Layer 4
        this.instance_16 = new lib.sprite37();
        this.instance_16.setTransform(-115.6, 7.8, 0.72, 0.72);

        // Layer 1
        this.instance_17 = new lib.sprite37();
        this.instance_17.setTransform(-115.6, -7.6, 0.72, 0.72);

        this.addChild(this.instance_17, this.instance_16, this.instance_15, this.instance_14, this.instance_13, this.instance_12, this.instance_11, this.instance_10, this.instance_9, this.instance_8, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-146.5, -38.5, 293.2, 77.3);


    (lib.comlumoslabsgamesmemoryMatrixTile = function () {
        this.initialize();

        // Layer 5
        this.cross = new lib.redX();
        this.cross.setTransform(0, 0, 0.472, 0.472);

        // Layer 3
        this.inactiveTile = new lib.InactiveTile();
        this.inactiveTile.setTransform(-24.9, -24.9);

        // Layer 1
        this.activeTile = new lib.ActiveTile();
        this.activeTile.setTransform(-24.9, -24.9);

        this.addChild(this.activeTile, this.inactiveTile, this.cross);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-24.9, -24.9, 50, 50);


    (lib.sprite92 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 28
        this.instance = new lib.sprite88();
        this.instance.setTransform(286.8, 94);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off: false}, 0).to({alpha: 0.934}, 14).wait(1).to({alpha: 1}, 0).wait(65).to({x: 215.8, y: 71}, 10).to({_off: true}, 1).wait(76).to({x: 119.8, y: 169.6, _off: false}, 0).wait(15).to({alpha: 0.145}, 6).wait(1).to({alpha: 0}, 0).wait(25));

        // Layer 26
        /* Layers with classic tweens must contain only a single symbol instance. */

        // Layer 24
        this.instance_1 = new lib.ActiveTile();
        this.instance_1.setTransform(165.9, 146, 0.02, 1);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(30).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(72).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(67).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 22
        this.instance_2 = new lib.ActiveTile();
        this.instance_2.setTransform(215.9, 46, 0.02, 1);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(30).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(37).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(99).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(6));

        // Layer 20
        this.instance_3 = new lib.InactiveTile();
        this.instance_3.setTransform(215.9, 146, 0.02, 1);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(213).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(1));

        // Layer 18
        this.instance_4 = new lib.InactiveTile();
        this.instance_4.setTransform(165.9, 146, 0.02, 1);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(25).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(64).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(80));

        // Layer 16
        this.instance_5 = new lib.InactiveTile();
        this.instance_5.setTransform(215.9, 96, 0.02, 1);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(214).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 14
        this.instance_6 = new lib.InactiveTile();
        this.instance_6.setTransform(115.9, 146, 0.02, 1);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(27).to({scaleX: 0.02, x: 115.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 97.5}, 3).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(97).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(47));

        // Layer 12
        this.instance_7 = new lib.InactiveTile();
        this.instance_7.setTransform(215.9, 46, 0.02, 1);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(27).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(29).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(115));

        // Layer 10
        this.instance_8 = new lib.InactiveTile();
        this.instance_8.setTransform(165.9, 96, 0.02, 1);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(5));

        // Layer 8
        this.instance_9 = new lib.InactiveTile();
        this.instance_9.setTransform(115.9, 96, 0.02, 1);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 6
        this.instance_10 = new lib.InactiveTile();
        this.instance_10.setTransform(165.9, 46, 0.02, 1);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 4
        this.instance_11 = new lib.InactiveTile();
        this.instance_11.setTransform(115.9, 46, 0.02, 1);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(11));

        // Layer 2
        this.instance_12 = new lib.sprite83();
        this.instance_12.setTransform(73.2, 27.8);
        this.instance_12.shadow = new cjs.Shadow("#999999", 0, 0, 10);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance_12}
        ]}).wait(263));

        // Layer 1
        this.instance_13 = new lib.shape81("synched", 0);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [
            {t: this.instance_13}
        ]}).wait(263));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 332.9, 242);


    (lib.sprite39 = function () {
        this.initialize();

        // Layer 12
        this.instance = new lib.sprite38();
        this.instance.setTransform(0.4, 0.3);

        // Layer 11
        this.instance_1 = new lib.shape33("synched", 0);

        // Layer 5
        this.instance_2 = new lib.sprite32();
        this.instance_2.setTransform(-46.4, -47.1, 0.72, 0.72);

        // Layer 3
        this.instance_3 = new lib.sprite32();
        this.instance_3.setTransform(61.6, -47.1, 0.72, 0.72);

        // Layer 1
        this.instance_4 = new lib.sprite32();
        this.instance_4.setTransform(-154.4, -47.1, 0.72, 0.72);

        this.addChild(this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-154.4, -47.1, 310.3, 94.3);


    (lib.comlumoslabsgamesmemoryMatrixscreensHelpScreen = function () {
        this.initialize();

        // Layer 8
        this.animation = new lib.sprite92();
        this.animation.setTransform(20.4, 70.1);

        // Layer 7
        this.instance = new lib.text80("synched", 0);
        this.instance.setTransform(22, 21.1);

        // Layer 3
        this.startButton = new lib.start_btn();
        this.startButton.setTransform(564.1, 439.1);
        new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.start_btn(), 3);

        // Layer 2
        this.instance_1 = new lib.text79("synched", 0);
        this.instance_1.setTransform(379.7, 72.1);

        // Layer 1
        this.instance_2 = new lib.shape78("synched", 0);

        this.addChild(this.instance_2, this.instance_1, this.startButton, this.instance, this.animation);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0.4, 0, 640, 480);


    (lib.comlumoslabsgamesmemoryMatrixscreensStartScreen = function () {
        alert("shi");
        this.initialize();

        // Layer 32
        this.instance = new lib.sprite42();
        this.instance.setTransform(40, 70, 1.546, 1.546);

        // Layer 19
        this.instance_1 = new lib.sprite39();
        this.instance_1.setTransform(317.5, 259.5, 0.93, 0.93);
        this.instance_1.alpha = 0.961;
        this.instance_1.shadow = new cjs.Shadow("#000000", 4, 4, 5);

        // Layer 14
        this.helpButton = new lib.howto_btn();
        this.helpButton.setTransform(247.8, 393.1, 1.126, 1.126);
        new cjs.ButtonHelper(this.helpButton, 0, 1, 2, false, new lib.howto_btn(), 3);

        // Layer 10
        this.startButton = new lib.start_btn();
        this.startButton.setTransform(422.9, 393.1, 1.126, 1.126);
        this.startButton.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 6);
        new cjs.ButtonHelper(this.startButton, 0, 1, 2, false, new lib.start_btn(), 3);

        // Layer 9
        this.instance_2 = new lib.text17("synched", 0);
        this.instance_2.setTransform(755.4, 145.6, 1.093, 1.093);

        // Layer 6
        this.instance_3 = new lib.sprite15();
        this.instance_3.setTransform(320, 240);

        // Layer 1
        this.mcBackground = new lib.sprite10();
        this.mcBackground.setTransform(-0.5, 0);

        this.addChild(this.mcBackground, this.instance_3, this.instance_2, this.startButton, this.helpButton, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-1.9, -1.9, 730.3, 482);

    return lib;
});
