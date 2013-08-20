requirejs.config({
    //The baseUrl is normally set to the same directory as the script used in a data-main attribute
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    //baseUrl: "/scripts",
    paths: {
        "MemoryMatrixGame": "com/lumoslabs/games/memoryMatrix/MemoryMatrixGame",
        createjs: "libs/createjs-2013.05.14.min"
    },
    shim: {
        createjs: {
            exports: "createjs"
        }
    }
});

// Start the main app logic.
require(["MemoryMatrixGame"],
    function (MemoryMatrixGame) {
        var memoryMatrixGame;
        memoryMatrixGame = new MemoryMatrixGame();
        memoryMatrixGame.initGame();
        console.log(memoryMatrixGame.getGameWidth());


    });