define(["createjs", "TweenMax", "util", "Library"], function (createjs, TweenMax, util, lib) {

    //Tile.WIDTH = 50;
    //Tile.HEIGHT = 50;
    Object.defineProperties(Tile, {
        WIDTH: {enumerable: true, configurable: false, writable: false, value: 50},
        HEIGHT: {enumerable: true, configurable: false, writable: false, value: 50}
    });

    function Tile(columnIndex, rowIndex, columns, rows, isMarked) {
        Object.defineProperties(this, {
            ACTIVATE_TWEEN_TIME: {enumerable: true, configurable: false, writable: false, value: 0.2},
            SHAKE_TWEEN_TIME: {enumerable: true, configurable: false, writable: false, value: 0.4},
            activeTile: {enumerable: true, configurable: false, writable: true},
            inactiveTile: {enumerable: true, configurable: false, writable: true},
            cross: {enumerable: true, configurable: false, writable: true},
            scaleXOrigin: {enumerable: true, configurable: false, writable: true},
            scaleYOrigin: {enumerable: true, configurable: false, writable: true},
            active: {enumerable: true,
                get: function active() {
                    return this.tileActive;
                },
                set: function (val) {
                    this.tileActive = val;
                },
                configurable: true},
            marked: {enumerable: true,
                get: function marked() {
                    return this.tileMarked;
                },
                set: function (val) {
                    this.tileMarked = val;
                },
                configurable: true},
            onComplete: {enumerable: true, configurable: false, writable: true},
            onCompleteParamArray: {enumerable: true, configurable: false, writable: true}
        });
        createjs.Container.call(this);
        this.init();

        this.tileMarked = isMarked;
        this.visible = false;
        this.buttonMode = true;
        this.mouseChildren = false;
        this.x = this.getCoord(columnIndex, columns, Tile.WIDTH);
        this.y = this.getCoord(rowIndex, rows, Tile.HEIGHT);
        this.tileActive = false;
        this.activeTile.visible = false;
        this.inactiveTile.visible = true;
        this.cross.visible = false;
    }

    util.inherits(Tile, createjs.Container);

    Tile.prototype.init = function () {
        this.cross = new lib.redX();
        this.cross.setTransform(0, 0, 0.472, 0.472);

        // Layer 3
        this.inactiveTile = new lib.InactiveTile();
        this.inactiveTile.setTransform(-24.9, -24.9);

        // Layer 1
        this.activeTile = new lib.ActiveTile();
        this.activeTile.setTransform(-24.9, -24.9);

        this.addChild(this.activeTile, this.inactiveTile, this.cross);
    };
    /*
     Tile.prototype.active = function () {
     return this.tileActive;
     }

     Tile.prototype.marked = function () {
     return this.tileActive;
     }*/

    Tile.prototype.show = function (param1, param2, param3) {
        param2 = (typeof param2 === "undefined") ? null : param2;
        param3 = (typeof param3 === "undefined") ? null : param3;
        if (param1) {
            this.appear(param2, param3);
        }
        else {
            this.disappear(param2, param3);
        }
    };

    Tile.prototype.activate = function (isActive, handleCompleteParam, handleComplete, handleCompleteParams) {
        handleComplete = (typeof handleComplete === "undefined") ? null : handleComplete;
        handleCompleteParams = (typeof handleCompleteParams === "undefined") ? null : handleCompleteParams;
        this.disableMouse();
        this.tileActive = isActive;
        this.onComplete = handleComplete;
        this.onCompleteParamArray = handleCompleteParams;
        //if (handleCompleteParam % 180 == 0) {
            TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleX: 0.1, ease: "Linear.easeNone", onComplete: this.activateFinish.bind(this), onCompleteParams: [handleCompleteParam]});
//        }
//        else {
//            TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleY: 0.1, ease: "Linear.easeNone", onComplete: this.activateFinish.bind(this), onCompleteParams: [handleCompleteParam]});
//        }
    };

    Tile.prototype.shake = function () {
        this.disableMouse();
        TweenMax.to(this, this.SHAKE_TWEEN_TIME / 2, {scaleX: 0.9, scaleY: 0.9, ease: "Quartic.easeOut", onComplete: this.shakeFinish.bind(this)});
    };

    Tile.prototype.crossOut = function () {
        this.disableMouse();
        this.cross.visible = true;
    };

    Tile.prototype.getCoord = function (param1, param2, param3) {
        return (param1 + (1 - param2) / 2) * param3;
    };

    Tile.prototype.appear = function (param1, param2) {
        this.disableMouse();
        this.onComplete = param1;
        this.onCompleteParamArray = param2;
        this.scaleXOrigin = this.scaleX;
        this.scaleX = this.scaleX * 0.1;
        this.visible = true;
        TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleX: this.scaleXOrigin, ease: "Linear.easeNone", onComplete: this.completeFun.bind(this)});
    };

    Tile.prototype.disappear = function (param1, param2) {
        this.disableMouse();
        this.onComplete = param1;
        this.onCompleteParamArray = param2;
        this.scaleXOrigin = this.scaleX;
        TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleX: 0.1 * this.scaleX, ease: "Linear.easeNone", onComplete: this.disappearCompleteFun.bind(this)});
    };

    Tile.prototype.activateFinish = function (param1) {
        this.activeTile.visible = this.tileActive;
        this.inactiveTile.visible = !this.tileActive;
        if (param1 % 180 == 0) {
            TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleX: 1, ease: "Linear.easeNone", onComplete: this.completeFun.bind(this)});
        }
        else {
            TweenMax.to(this, this.ACTIVATE_TWEEN_TIME / 2, {scaleY: 1, ease: "Linear.easeNone", onComplete: this.completeFun.bind(this)});
        }
    };

    Tile.prototype.shakeFinish = function () {
        TweenMax.to(this, this.SHAKE_TWEEN_TIME / 2, {scaleX: 1, scaleY: 1, ease: "Quartic.easeIn", onComplete: this.enableMouse.bind(this)});
    }

    Tile.prototype.enableMouse = function () {
        this.mouseEnabled = true;
    };

    Tile.prototype.disableMouse = function () {
        this.mouseEnabled = false;
    };

    Tile.prototype.disappearCompleteFun = function () {
        this.visible = false;
        this.scaleX = this.scaleXOrigin;
        if (this.onComplete != null) {
            this.onComplete.apply(null, this.onCompleteParamArray);
        }
    };

    Tile.prototype.completeFun = function () {
        this.enableMouse();
        if (this.onComplete != null) {
            this.onComplete.apply(null, this.onCompleteParamArray);
        }
    };

    return Tile
});