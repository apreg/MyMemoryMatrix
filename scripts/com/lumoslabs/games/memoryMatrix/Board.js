define(["createjs", "TweenMax", "util", "Library", "Tile", "Random"], function (createjs, TweenMax, util, lib, Tile, Random) {

    function Board(columns, rows, markedTiles, tileClickListener) {
        Object.defineProperties(this, {
            center: {enumerable: true, configurable: false, writable: true},
            topLeftCorner: {enumerable: true, configurable: false, writable: true},
            topRightCorner: {enumerable: true, configurable: false, writable: true},
            bottomRightCorner: {enumerable: true, configurable: false, writable: true},
            bottomLeftCorner: {enumerable: true, configurable: false, writable: true},
            leftSide: {enumerable: true, configurable: false, writable: true},
            topSide: {enumerable: true, configurable: false, writable: true},
            rightSide: {enumerable: true, configurable: false, writable: true},
            bottomSide: {enumerable: true, configurable: false, writable: true},
            columns: {enumerable: true, configurable: false, writable: true},
            rows: {enumerable: true, configurable: false, writable: true},
            tileMatrix: {enumerable: true, configurable: false, writable: true},
            markedTileArray: {enumerable: true, configurable: false, writable: true},
            diagonalXIndex: {enumerable: true, configurable: false, writable: true},
            tileParentSprite: {enumerable: true, configurable: false, writable: true},
            onFlipComplete: {enumerable: true, configurable: false, writable: true},
            DIAGONAL_WAIT: {enumerable: true, configurable: false, writable: false, value: 0.05},
            FLIP_TWEEN_TIME: {enumerable: true, configurable: false, writable: false, value: 0.2},
            FLIP_PAUSE: {enumerable: true, configurable: false, writable: false, value: 3},
            BORDER_WIDTH: {enumerable: true, configurable: false, writable: false, value: 20},
            BORDER_HEIGHT: {enumerable: true, configurable: false, writable: false, value: 20},
            CORNER_SPACE: {enumerable: true, configurable: false, writable: false, value: 10},

            scoreField: {enumerable: true, configurable: false, writable: true},
            trialField: {enumerable: true, configurable: false, writable: true},
            levelField: {enumerable: true, configurable: false, writable: true},
            mcUserPrompt: {enumerable: true, configurable: false, writable: true}
        });
        this.columns = columns;
        this.rows = rows;
        createjs.Container.call(this);
        this.init();
        this.setupBoard();
        this.setupTiles(markedTiles, tileClickListener);
    }

    util.inherits(Board, createjs.Container);

    Board.prototype.init = function () {


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
    };

    Board.prototype.appear = function (onCompleteParams) {
        TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 1, ease: "Linear.easeNone", onComplete: this.appearFinish.bind(this), onCompleteParams: [onCompleteParams]});
    };

    Board.prototype.appearFinish = function (param1) {
        param1 = (typeof param1 === "undefined") ? null : param1; // javascript optional parameters. It equals to this (param1 = null)
        this.diagonalXIndex = 0;
        this.delayedShowDiagonalTiles(true, param1);
    };

    Board.prototype.delayedShowDiagonalTiles = function (param1, param2) {
        TweenMax.delayedCall(this.DIAGONAL_WAIT, this.showDiagonalTiles.bind(this), [param1, param2]);
    };


    Board.prototype.flip = function (param1, param2, param3) {
        if (this.rotation % 180 == 0) {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 0.1, ease: "Linear.easeNone", onComplete: this.flipFinish.bind(this), onCompleteParams: [param1, param2, param3]});
        }
        else {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleY: 0.1, ease: "Linear.easeNone", onComplete: this.flipFinish.bind(this), onCompleteParams: [param1, param2, param3]});
        }
    };


    Board.prototype.endFlip = function (param1, param2, param3) {
        this.onFlipComplete = param3;
        if (this.rotation % 180 == 0) {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 0.1, ease: "Linear.easeNone", onComplete: this.endFlipFinish.bind(this), onCompleteParams: [param1, param2]});
        }
        else {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleY: 0.1, ease: "Linear.easeNone", onComplete: this.endFlipFinish.bind(this), onCompleteParams: [param1, param2]});
        }
    }

    Board.prototype.flipFinish = function (param1, param2, param3) {
        var _loc_4 = undefined;
        this.removeChild(this.tileParentSprite);
        if (param2 > 0) {
            _loc_4 = new lib.PerfectEndTrialBox();
            _loc_4.bonusField.text = "+" + param2;
        }
        else {
            _loc_4 = new lib.EndTrialBox();
        }
        if (param1 == 1) {
            _loc_4.tilesField.text = param1 + " tile";
        }
        else {
            _loc_4.tilesField.text = param1 + " tiles";
        }
        _loc_4.rotation = -this.rotation;
        this.addChild(_loc_4);
        if (this.rotation % 180 == 0) {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 1, ease: "Linear.easeNone", onComplete: this.flipComplete.bind(this), onCompleteParams: [param3]});
        }
        else {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleY: 1, ease: "Linear.easeNone", onComplete: this.flipComplete.bind(this), onCompleteParams: [param3]});
        }

    };

    Board.prototype.flipComplete = function (param1) {
        if (this.rotation % 180 == 0) {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 0.1, delay: this.FLIP_PAUSE, ease: "Linear.easeNone", onComplete: param1});
        }
        else {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleY: 0.1, delay: this.FLIP_PAUSE, ease: "Linear.easeNone", onComplete: param1});
        }
    };

    Board.prototype.endFlipFinish = function (param1, param2) {
        var _loc_3 = undefined;
        this.removeChild(this.tileParentSprite);
        if (param2 > 0) {
            _loc_3 = new lib.PerfectEndGameBox();
            _loc_3.bonusField.text = "+" + param2;
        }
        else {
            _loc_3 = new lib.EndGameBox();
        }
        _loc_3.rotation = -this.rotation;
        this.addChild(_loc_3);
        if (this.rotation % 180 == 0) {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleX: 1, ease: "Linear.easeNone", onComplete: this.endFlipComplete.bind(this)});
        }
        else {
            TweenMax.to(this, this.FLIP_TWEEN_TIME / 2, {scaleY: 1, ease: "Linear.easeNone", onComplete: this.endFlipComplete.bind(this)});
        }
    };

    Board.prototype.endFlipComplete = function () {
        if (this.onFlipComplete != null) {
            TweenMax.delayedCall(this.FLIP_PAUSE, this.onFlipComplete.bind(this));
        }
    };

    Board.prototype.showMarkedTiles = function (param1, param2, param3) {
        param2 = (typeof param2 === "undefined") ? null : param2;
        param3 = (typeof param3 === "undefined") ? null : param3;

        this.markedTileArray[0].activate(param1, this.rotation, param2, param3);
        var _loc_4 = 1;
        while (_loc_4 < this.markedTileArray.length) {
            this.markedTileArray[_loc_4].activate(param1, this.rotation);
            _loc_4 = _loc_4 + 1;
        }
    };

    Board.prototype.showInactiveMarkedTiles = function (param1, param2, param3) {
        param2 = (typeof param2 === "undefined") ? null : param2;
        param3 = (typeof param3 === "undefined") ? null : param3;
        var _loc_5 = null;
        var _loc_4 = false;
        var i = 0;
        while (i < this.markedTileArray.length) {
            _loc_5 = this.markedTileArray[i];
            if (!_loc_5.active) {
                if (!_loc_4) {
                    _loc_4 = true;
                    _loc_5.activate(param1, this.rotation, param2, param3);
                    continue;
                }
                _loc_5.activate(param1, this.rotation);
            }
            ++i;
        }
    };

    Board.prototype.showDiagonalTiles = function (param1, param2, param3) {
        param2 = (typeof param2 === "undefined") ? null : param2;
        param3 = (typeof param3 === "undefined") ? null : param3;

        var loc1=Math.min(this.diagonalXIndex, this.columns - 1);
        var loc2=Math.max(0, this.diagonalXIndex - this.columns + 1);
        while (loc1 >= 0 && loc2 < this.rows)
        {
            if (loc1 == this.columns - 1 && loc2 == this.rows - 1)
            {
                this.tileMatrix[loc1][loc2].show(param1, param2, param3);
            }
            else
            {
                this.tileMatrix[loc1][loc2].show(param1);
            }
            --loc1;
            ++loc2;
        }
        this.diagonalXIndex++;
        if (this.diagonalXIndex < this.columns + this.rows - 1)
        {
            this.delayedShowDiagonalTiles(param1, param2);
        }
    };

    Board.prototype.setupBoard = function () {
        var _loc_1 = Tile.WIDTH * this.columns + 2 * this.BORDER_WIDTH;
        var _loc_2 = Tile.HEIGHT * this.rows + 2 * this.BORDER_HEIGHT;
        this.center.width = Tile.WIDTH * this.columns - this.CORNER_SPACE;
        this.center.height = Tile.HEIGHT * this.rows - this.CORNER_SPACE;
        this.topLeftCorner.x = (-_loc_1) / 2;
        this.topLeftCorner.y = (-_loc_2) / 2;
        this.topRightCorner.x = _loc_1 / 2;
        this.topRightCorner.y = (-_loc_2) / 2;
        this.bottomRightCorner.x = _loc_1 / 2;
        this.bottomRightCorner.y = _loc_2 / 2;
        this.bottomLeftCorner.x = (-_loc_1) / 2;
        this.bottomLeftCorner.y = _loc_2 / 2;
        this.leftSide.x = (-_loc_1) / 2;
        this.leftSide.y = 0;
        this.leftSide.height = this.center.height;
        this.topSide.x = 0;
        this.topSide.y = (-_loc_2) / 2;
        this.topSide.width = this.center.width;
        this.rightSide.x = _loc_1 / 2;
        this.rightSide.y = 0;
        this.rightSide.height = this.center.height;
        this.bottomSide.x = 0;
        this.bottomSide.y = _loc_2 / 2;
        this.bottomSide.width = this.center.width;
        this.scaleX = 0.1;
    };

    Board.prototype.setupTiles = function (markedTilesCt, eventListener) {
        var _loc_6 = null;
        var _loc_8 = 0;
        var _loc_3 = new Array();
        var _loc_4 = 0;
        while (_loc_4 < markedTilesCt) {
            _loc_3.push(Random.otherIntBetween(1, this.columns * this.rows, _loc_3));
            _loc_4 = _loc_4 + 1;
        }
        this.tileMatrix = new Array();
        this.markedTileArray = new Array();
        this.tileParentSprite = new createjs.Container();
        this.addChild(this.tileParentSprite);
        var _loc_5 = 1;
        var _loc_7 = 0;
        while (_loc_7 < this.columns) {

            this.tileMatrix[_loc_7] = new Array();
            _loc_8 = 0;
            while (_loc_8 < this.rows) {

                if (_loc_3.indexOf(_loc_5) >= 0) {
                    _loc_6 = new Tile(_loc_7, _loc_8, this.columns, this.rows, true);
                    this.markedTileArray.push(_loc_6);
                }
                else {
                    _loc_6 = new Tile(_loc_7, _loc_8, this.columns, this.rows, false);
                }
                this.tileMatrix[_loc_7][_loc_8] = _loc_6;
                _loc_6.addEventListener("mousedown", eventListener);
                this.tileParentSprite.addChild(_loc_6);
                _loc_5 = _loc_5 + 1;
                _loc_8 = _loc_8 + 1;
            }
            _loc_7 = _loc_7 + 1;
        }
    };

    return Board
});