define(["createjs", "TweenMax", "StartScreen", "HelpScreen", "PlayScreen", "EndScreen", "Board", "Display", "Library"], function (createjs, TweenMax, StartScreen, HelpScreen, PlayScreen, EndScreen, Board, Display, lib) {
    "use strict";
    function MemoryMatrixGame(stage) {
        Object.defineProperties(this, {
            //loader: {enumerable: false, configurable: false, writable: false, value: loader},
            rowArray: {enumerable: true, configurable: false, writable: true},
            markedTileArray: {enumerable: true, configurable: false, writable: true},
            showTimeArray: {enumerable: true, configurable: false, writable: true},
            tilePoints: {enumerable: true, configurable: false, writable: true},
            perfectPoints: {enumerable: true, configurable: false, writable: true},
            maxConsLosses: {enumerable: true, configurable: false, writable: true},
            gameWidth: {enumerable: true, configurable: false, writable: true},
            gameHeight: {enumerable: true, configurable: false, writable: true},
            level: {enumerable: true, configurable: false, writable: true},
            numTrials: {enumerable: true, configurable: false, writable: true},
            maxLevel: {enumerable: true, configurable: false, writable: true},
            levelIndex: {enumerable: true, configurable: false, writable: true},
            trialsLeft: {enumerable: true, configurable: false, writable: true},
            consLosses: {enumerable: true, configurable: false, writable: true},
            score: {enumerable: true, configurable: false, writable: true, value: 0},
            startScreen: {enumerable: true, configurable: false, writable: true},
            helpScreen: {enumerable: true, configurable: false, writable: true},
            playScreen: {enumerable: true, configurable: false, writable: true},
            endScreen: {enumerable: true, configurable: false, writable: true},
            board: {enumerable: true, configurable: false, writable: true, value: null},
            markedTiles: {enumerable: true, configurable: false, writable: true},
            maxMarkedTiles: {enumerable: true, configurable: false, writable: true},
            activeMarkedTiles: {enumerable: true, configurable: false, writable: true},
            tileHistoryArray: {enumerable: true, configurable: false, writable: true},
            failedOnceAlready: {enumerable: true, configurable: false, writable: true, value: false},
            succeededOnceAlready: {enumerable: true, configurable: false, writable: true, value: false},
            END_LEVEL_WAIT: {enumerable: true, configurable: false, writable: false, value: 0.5},
            SHOW_MARK_WAIT: {enumerable: true, configurable: false, writable: false, value: 0.5},
            INDENT_Y: {enumerable: true, configurable: false, writable: false, value: -5},
            stage: {enumerable: true, configurable: false, writable: true, value: stage},
            columnArray: {enumerable: true, configurable: false, writable: true},
            soundEffects: {enumerable: true, configurable: false}
        });
        this.initGame();
        this.start();
    }

    MemoryMatrixGame.prototype.start = function () {
        this.initPlay();
        this.stage.addChild(this.startScreen);
    };

    MemoryMatrixGame.prototype.play = function () {
        this.initPlay();
        this.stage.addChild(this.playScreen);
        this.nextTrial();
    };

    MemoryMatrixGame.prototype.help = function () {
        //super.help();
        //sounds.stopAll();
        //TweenMax.killAll();
        Display.removeIfChildren(this.stage, this.startScreen, this.helpScreen, this.playScreen, this.endScreen);
        this.stage.addChild(this.helpScreen);
        //helpScreen.startAnimation();
    };

    MemoryMatrixGame.prototype.destroy = function () {
        throw "Not implemented yet";
    };

    MemoryMatrixGame.prototype.setDefaultSettings = function () {
        this.level = 3;
        this.numTrials = 15;
    };

    MemoryMatrixGame.prototype.initGame = function () {
        this.level = 3;
        this.numTrials = 15;
        this.gameWidth = this.stage.canvas.width;  //TODO: maybe this dependency can cause problems
        this.gameHeight = this.stage.canvas.height;
        this.startScreen = new StartScreen(this.startClick.bind(this), this.helpClick.bind(this));
        this.helpScreen = new HelpScreen(this.startClick.bind(this));
        this.playScreen = new PlayScreen();
        this.endScreen = new EndScreen(this.continueClick.bind(this));
        //soundEffects = new MemoryMatrixSoundEffects();
        this.columnArray = [2, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
        this.rowArray = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
        this.markedTileArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
        this.showTimeArray = [1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5];
        this.tilePoints = 10;
        this.perfectPoints = 5;
        this.maxConsLosses = 0;

        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addListener(this.stage, false);
    };

    MemoryMatrixGame.prototype.initPlay = function () {
        Display.removeIfChildren(this.stage, this.startScreen, this.helpScreen, this.playScreen, this.endScreen);
        //this.helpScreen.resetAnimation();
        //sounds.stopAll();
        TweenMax.killAll(false, true, true, true);
        this.maxLevel = this.level;
        this.levelIndex = this.level - 1;
        this.trialsLeft = this.numTrials;
        this.consLosses = 0;
        this.score = 0;
        this.maxMarkedTiles = this.markedTileArray[this.levelIndex];
        this.tileHistoryArray = new Array();
        this.playScreen.setTrialText(this.trialsLeft);
    };

    MemoryMatrixGame.prototype.helpClick = function (event) {
        this.help();
    };

    MemoryMatrixGame.prototype.startClick = function (event) {
        this.play();
    };

    MemoryMatrixGame.prototype.continueClick = function (event) {
        //this.sounds.stopAll();
        //reportQuit();
    };

    MemoryMatrixGame.prototype.nextTrial = function () {
        Display.removeIfChild(this.playScreen, this.board);
        this.setupTiles();
        this.playScreen.setScoreText(this.score);
        this.playScreen.setLevelText(this.markedTiles);
        this.playScreen.addChild(this.board);
        if (this.markedTiles <= 2) {
            this.setUserPrompt("Watch which tiles appear...");
        }
        else {
            this.setUserPrompt("");
        }
        this.board.appear(this.delayedShowMarkedTiles.bind(this));
        var loc1 = 240 + this.board.height / 2 + 40;
        if (this.rowArray[this.levelIndex] < 5) {
            loc1 = loc1 + 23;
        }
        if (this.playScreen.mcUserPrompt) {
            this.playScreen.mcUserPrompt.y = loc1;
        }
        //sounds.playBoardFlipSound();
    };

    MemoryMatrixGame.prototype.setupTiles = function () {
        var _loc_1 = this.columnArray[this.levelIndex];
        var _loc_2 = this.rowArray[this.levelIndex];
        this.markedTiles = this.markedTileArray[this.levelIndex];
        this.tileHistoryArray.push(this.markedTiles);
        this.maxMarkedTiles = Math.max(this.markedTiles, this.maxMarkedTiles);
        this.activeMarkedTiles = 0;
        this.board = new Board(_loc_1, _loc_2, this.markedTiles, this.tileClickListener.bind(this));
        this.board.x = this.gameWidth / 2;
        this.board.y = this.gameHeight / 2 + this.INDENT_Y;
        this.disableInput();
    };

    MemoryMatrixGame.prototype.delayedShowMarkedTiles = function () {
        var _loc_1 = this.SHOW_MARK_WAIT;
        if (this.levelIndex < 2) {
            _loc_1 = _loc_1 + (2 - this.levelIndex) * 1;
        }
        TweenMax.delayedCall(_loc_1, this.showMarkedTiles.bind(this), [this.delayedHideMarkedTiles.bind(this)]);
    };

    MemoryMatrixGame.prototype.delayedHideMarkedTiles = function () {
        TweenMax.delayedCall(this.showTimeArray[this.levelIndex], this.hideMarkedTiles.bind(this), [this.enableInput.bind(this)]);
    };

    MemoryMatrixGame.prototype.showMarkedTiles = function (param1) {
        this.board.showMarkedTiles(true, param1);
        //sounds.playCardFlipSound();
    };

    MemoryMatrixGame.prototype.hideMarkedTiles = function (param1) {
        this.board.showMarkedTiles(false, param1);
        //sounds.playCardFlipSound();
        if (this.maxMarkedTiles <= 4) {
            this.setUserPrompt("Now click the tiles that appeared.");
        }
    };

    MemoryMatrixGame.prototype.setUserPrompt = function (param1) {
        this.playScreen.setUserPrompt(param1);
    };

    MemoryMatrixGame.prototype.decrementRemainingTrials = function () {
        this.playScreen.setTrialText(--this.trialsLeft);
    };

    MemoryMatrixGame.prototype.tileClickListener = function (event) {
        var _loc_3 = null;
        var _loc_4 = null;
        var tile = event.target;
        if (tile.active) {
            tile.shake();
            //sounds.playShakeSound();
        }
        else if (tile.marked) {
            var _loc_6 = this.activeMarkedTiles + 1;
            this.activeMarkedTiles = _loc_6;
            this.score = this.score + this.tilePoints;
            this.playScreen.setScoreText(this.score);
            if (this.activeMarkedTiles == this.markedTiles) {
                this.disableInput();
                tile.activate(true, this.board.rotation, this.delayedWinLevel.bind(this));
                //sounds.playWinSound();
                _loc_3 = "";
                if (this.succeededOnceAlready) {
                    _loc_3 = "Correct!";
                }
                else {
                    _loc_3 = "Correct!";
                    if (this.trialsLeft > 1) {
                        _loc_3 = _loc_3 + " Let\'s try one with more tiles.";
                    }
                    this.succeededOnceAlready = true;
                }
                if (_loc_3 != "") {
                    this.setUserPrompt(_loc_3);
                }
            }
            else {
                tile.activate(true, this.board.rotation);
            }
            // sounds.playCardFlipSound();
        }
        else {
            tile.crossOut();
            //sounds.playIncorrectSound();
            this.board.showInactiveMarkedTiles(true, this.delayedLoseLevel.bind(this));
            _loc_4 = "";
            if (this.activeMarkedTiles == (this.markedTiles - 1)) {
                if (this.consLosses == 0) {
                }
                if (this.markedTiles >= 3) {
                    _loc_4 = "You missed it by one tile.";
                    if (this.trialsLeft > 1) {
                        _loc_4 = _loc_4 + " Try again.";
                    }
                }
                else {
                    if (this.markedTiles != this.markedTileArray[0]) {
                    }
                    if (this.failedOnceAlready) {
                        _loc_4 = "Sorry, that wasn\'t right.";
                        if (this.trialsLeft > 1) {
                            _loc_4 = _loc_4 + " Try again.";
                        }
                    }
                    else {
                        this.setUserPrompt("Sorry, that wasn\'t right.");
                        if (this.trialsLeft > 1) {
                            _loc_4 = _loc_4 + " Let\'s try one with fewer tiles.";
                        }
                    }
                }
            }
            else if (this.markedTiles == this.markedTileArray[0]) {
                _loc_4 = "Sorry, that wasn\'t right.";
                if (this.trialsLeft > 1) {
                    _loc_4 = _loc_4 + " Remember to note where the tiles appear.";
                }
            }
            else {
                _loc_4 = "Sorry, that wasn\'t right.";
                if (!this.failedOnceAlready) {
                    if (this.trialsLeft > 1) {
                        _loc_4 = _loc_4 + " Let\'s try one with fewer tiles.";
                    }
                }
            }
            if (_loc_4 != "") {
                this.setUserPrompt(_loc_4);
            }
            this.failedOnceAlready = true;
        }
    };

    MemoryMatrixGame.prototype.delayedWinLevel = function () {
        TweenMax.delayedCall(this.END_LEVEL_WAIT, this.winLevel.bind(this));
    };

    MemoryMatrixGame.prototype.delayedLoseLevel = function () {
        TweenMax.delayedCall(this.END_LEVEL_WAIT, this.loseLevel.bind(this));
    };

    MemoryMatrixGame.prototype.winLevel = function () {
        this.decrementRemainingTrials();
        var _loc_1 = Math.pow(2, this.levelIndex - 2) * this.perfectPoints;
        if (this.levelIndex < 2) {
            _loc_1 = [1, 3][this.levelIndex];
        }
        this.levelIndex = Math.min((this.levelIndex + 1), (this.columnArray.length - 1));
        this.maxLevel = Math.min((this.maxLevel + 1), this.columnArray.length);
        this.score = this.score + _loc_1;
        this.playScreen.setScoreText(this.score);
        this.consLosses = 0;
        if (this.trialsLeft == 0) {
            this.board.endFlip(this.markedTileArray[this.levelIndex], _loc_1, this.endGame.bind(this));
        }
        else {
            this.board.flip(this.markedTileArray[this.levelIndex], _loc_1, this.nextTrial.bind(this));
        }
        //sounds.playBoardFlipSound();
    };

    MemoryMatrixGame.prototype.loseLevel = function () {
        this.decrementRemainingTrials();
        var _loc_3 = this.consLosses + 1;
        this.consLosses = _loc_3;
        var _loc_1 = false;
        if (this.activeMarkedTiles == (this.markedTiles - 1)) {
            if (this.consLosses <= 1) {
            }
            if (this.levelIndex < 2) {
                _loc_1 = true;
            }
        }
        else {
            _loc_1 = true;
        }
        if (_loc_1) {
            this.levelIndex = Math.max((this.levelIndex - 1), 0);
            this.consLosses = 0;
        }
        this.playScreen.setScoreText(this.score);
        if (this.trialsLeft == 0) {
            this.board.endFlip(this.markedTileArray[this.levelIndex], 0, this.endGame.bind(this));
        }
        else {
            this.board.flip(this.markedTileArray[this.levelIndex], 0, this.nextTrial.bind(this));
        }
        //sounds.playBoardFlipSound();
    };

    MemoryMatrixGame.prototype.endGame = function () {
        //TweenMax.killAll();
        this.stage.removeChild(this.playScreen);
        this.endScreen.setScoreText(this.score);
        if (this.maxMarkedTiles == 1) {
            this.endScreen.setLevelText(this.maxMarkedTiles + " tile");
        }
        else {
            this.endScreen.setLevelText(this.maxMarkedTiles + " tiles");
        }
        //reportData({score:score, session_level:maxLevel, threshold:getThreshold(tileHistoryArray), version:GIT.commitID});
        this.stage.addChild(this.endScreen);
    };

    MemoryMatrixGame.prototype.enableInput = function () {
        if (this.board) {
            this.board.mouseChildren = true;
        }
    };

    MemoryMatrixGame.prototype.disableInput = function () {
        if (this.board) {
            this.board.mouseChildren = false;
        }
    };

    return MemoryMatrixGame
})
;




