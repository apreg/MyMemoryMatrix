define(["createjs", "util"], function Library(createjs, util) {
    var p;

    /*
    Library.mousePointer = (function () {
     util.inherits(MousePointer, createjs.Container);
     function MousePointer() {
     createjs.Container.call(this);
     this.shape = new createjs.Shape();
     this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
     this.shape.setTransform(6.7, 10.7);

     this.shape_1 = new createjs.Shape();
     this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
     this.shape_1.setTransform(6.7, 11);

     this.addChild(this.shape_1, this.shape);

     }
     return MousePointer;
     })();
     */
      /*
    //mouse pointer
    Library.mousePointer = function () {
        createjs.Container.call(this);
        //this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
        this.shape.setTransform(6.7, 10.7);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
        this.shape_1.setTransform(6.7, 11);

        this.addChild(this.shape_1, this.shape);
    };
    util.inherits( Library.mousePointer, createjs.Container);
    //Library.mousePointer.prototype = p = new createjs.Container();
    //p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);
    */

    (Library.shape87 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#333333").ss(1, 0, 0, 3, true).p("Ag0BLQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALQgIAEgEgJQgOgegHgdg");
        this.shape.setTransform(6.7, 10.7);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.rf(["#FFFFFF", "#A6A6A6"], [0.471, 1], -5.5, -1.8, 0, -5.5, -1.8, 19.9).s().p("AAEBnQgOgegHgdIgjAcQgMAHgCgOIAAitICBBwQAKAMgNAFIguAHQAHAdAYAbQAEAJgJAEIgYALIgFABQgFAAgCgGg");
        this.shape_1.setTransform(6.7, 11);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);

    (Library.sprite88 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape87("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 13.5, 21.9);

    (Library.sprite92 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 28
        this.instance = new Library.sprite88();
        this.instance.setTransform(286.8, 94);
        this.instance.alpha = 0;
        this.instance._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance).wait(49).to({_off: false}, 0).to({alpha: 0.934}, 14).wait(1).to({alpha: 1}, 0).wait(65).to({x: 215.8, y: 71}, 10).to({_off: true}, 1).wait(76).to({x: 119.8, y: 169.6, _off: false}, 0).wait(15).to({alpha: 0.145}, 6).wait(1).to({alpha: 0}, 0).wait(25));

        // Layer 26
        /* Layers with classic tweens must contain only a single symbol instance. */

        // Layer 24
        this.instance_1 = new Library.ActiveTile();
        this.instance_1.setTransform(165.9, 146, 0.02, 1);
        this.instance_1._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(30).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(72).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(67).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 22
        this.instance_2 = new Library.ActiveTile();
        this.instance_2.setTransform(215.9, 46, 0.02, 1);
        this.instance_2._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(71).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(30).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(37).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(99).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(6));

        // Layer 20
        this.instance_3 = new Library.InactiveTile();
        this.instance_3.setTransform(215.9, 146, 0.02, 1);
        this.instance_3._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(38).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(213).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(1));

        // Layer 18
        this.instance_4 = new Library.InactiveTile();
        this.instance_4.setTransform(165.9, 146, 0.02, 1);
        this.instance_4._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_4).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(25).to({scaleX: 0.02, x: 165.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 147.6}, 3).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(64).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(80));

        // Layer 16
        this.instance_5 = new Library.InactiveTile();
        this.instance_5.setTransform(215.9, 96, 0.02, 1);
        this.instance_5._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_5).wait(35).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(214).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(3));

        // Layer 14
        this.instance_6 = new Library.InactiveTile();
        this.instance_6.setTransform(115.9, 146, 0.02, 1);
        this.instance_6._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_6).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(27).to({scaleX: 0.02, x: 115.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 97.5}, 3).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(97).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(47));

        // Layer 12
        this.instance_7 = new Library.InactiveTile();
        this.instance_7.setTransform(215.9, 46, 0.02, 1);
        this.instance_7._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_7).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 196.3}, 4).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(27).to({scaleX: 0.02, x: 215.9}, 4).to({_off: true}, 1).wait(39).to({_off: false}, 0).to({scaleX: 0.76, x: 197.6}, 3).wait(1).to({scaleX: 1, x: 191.4}, 0).wait(29).to({scaleX: 0.02, x: 215.9}, 5).to({_off: true}, 1).wait(115));

        // Layer 10
        this.instance_8 = new Library.InactiveTile();
        this.instance_8.setTransform(165.9, 96, 0.02, 1);
        this.instance_8._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_8).wait(33).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(5));

        // Layer 8
        this.instance_9 = new Library.InactiveTile();
        this.instance_9.setTransform(115.9, 96, 0.02, 1);
        this.instance_9._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_9).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 6
        this.instance_10 = new Library.InactiveTile();
        this.instance_10.setTransform(165.9, 46, 0.02, 1);
        this.instance_10._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_10).wait(30).to({_off: false}, 0).to({scaleX: 0.8, x: 146.3}, 4).wait(1).to({scaleX: 1, x: 141.4}, 0).wait(214).to({scaleX: 0.02, x: 165.9}, 5).to({_off: true}, 1).wait(8));

        // Layer 4
        this.instance_11 = new Library.InactiveTile();
        this.instance_11.setTransform(115.9, 46, 0.02, 1);
        this.instance_11._off = true;

        this.timeline.addTween(createjs.Tween.get(this.instance_11).wait(27).to({_off: false}, 0).to({scaleX: 0.8, x: 96.3}, 4).wait(1).to({scaleX: 1, x: 91.4}, 0).wait(214).to({scaleX: 0.02, x: 115.9}, 5).to({_off: true}, 1).wait(11));

        // Layer 2
        this.instance_12 = new Library.sprite83();
        this.instance_12.setTransform(73.2, 27.8);
        this.instance_12.shadow = new createjs.Shadow("#999999", 0, 0, 10);

        this.timeline.addTween(createjs.Tween.get({}).to({state: [
            {t: this.instance_12}
        ]}).wait(263));

        // Layer 1
        this.instance_13 = new Library.shape81("synched", 0);

        this.timeline.addTween(createjs.Tween.get({}).to({state: [
            {t: this.instance_13}
        ]}).wait(263));

    }).prototype = p = new createjs.MovieClip();
    p.nominalBounds = new createjs.Rectangle(0, 0, 332.9, 242);

    (Library.ActiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.sprite37();
        this.instance.setTransform(0, 0, 2.33, 2.33);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.InactiveTile = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.sprite85();

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.sprite37 = function () {
        this.initialize();

        // Layer 2
        this.instance = new Library.sprite36();
        this.instance.setTransform(10.7, 10.7);

        // Layer 1
        this.instance_1 = new Library.shape34("synched", 0);

        this.addChild(this.instance_1, this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 21.5, 21.5);

    (Library.sprite36 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape35("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-10.6, -10.6, 21.5, 21.5);

    (Library.shape35 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#E34502").ss(1, 0, 0, 3, true).p("ABrBrIjVAAIAAjVIDVAAg");

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#B32200").s().p("AhqBrIAAjVIDVAAIAADVg");

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(-10.6, -10.6, 21.5, 21.5);

    (Library.shape34 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#FEB89A").ss(1, 0, 0, 3, true).p("AhqhqIDVAAIAADVIjVAAg");
        this.shape.setTransform(10.7, 10.7);

        this.addChild(this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 21.5, 21.5);

    (Library.sprite85 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape84("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.shape84 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#AAAAAA").ss(1, 0, 0, 3, true).p("AD6j5IAAHzInzAAIAAnzg");
        this.shape.setTransform(25, 25);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#E6E6E6").s().p("Aj5D6IAAnzIHzAAIAAHzg");
        this.shape_1.setTransform(25, 25);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 50, 50);

    (Library.sprite83 = function () {
        this.initialize();

        // Layer 1
        this.instance = new Library.shape82("synched", 0);

        this.addChild(this.instance);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 186.5, 186.5);

    (Library.shape82 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#FFFFFF").ss(1, 0, 0, 3, true).p("AMPubI4cAAQiOAAAACNIAAYdQAACNCOAAIYcAAQCNAAAAiNIAA4dQAAiNiNAAg");
        this.shape.setTransform(93.3, 93.3);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#CCCCCC").s().p("AsNOcQiOAAAAiOIAA4cQAAiMCOgBIYbAAQCOABAACMIAAYcQAACOiOAAg");
        this.shape_1.setTransform(93.3, 93.3);

        this.shape_2 = new createjs.Shape();
        this.shape_2.graphics.f("#BBBBBB").s().p("AsVOkQiOAAAAiOIAA4rQAAiOCOAAIYrAAQCOAAAACOIAAYrQAACOiOAAgAubsOIAAYcQAACOCOAAIYbAAQCOAAAAiOIAA4cQAAiMiOgBI4bAAQiOABAACMg");
        this.shape_2.setTransform(93.3, 93.3);

        this.addChild(this.shape_2, this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 186.5, 186.5);

    (Library.shape81 = function () {
        this.initialize();

        // Layer 1
        this.shape = new createjs.Shape();
        this.shape.graphics.f().s("#CCCCCC").ss(1, 0, 0, 3, true).p("AaAy5MgyNAAAQhyAAAAByMAAAAkBMAyMAAAQBzAAAAhyg");
        this.shape.setTransform(166.4, 121);

        this.shape_1 = new createjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A5/S6MAAAgkAQAAhzByAAMAyNAAAMAAAAkAQAABzhzAAg");
        this.shape_1.setTransform(166.4, 121);

        this.addChild(this.shape_1, this.shape);
    }).prototype = p = new createjs.Container();
    p.nominalBounds = new createjs.Rectangle(0, 0, 332.9, 242);
    
    return Library;
})
;
