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
        createjs: "libs/createjs-2013.05.14.min",
        util: "com/lumoslabs/utils/Util",
        //loader: "com/lumoslabs/utils/Loader",
        StartScreen: "com/lumoslabs/games/memoryMatrix/screens/StartScreen",
        HelpScreen: "com/lumoslabs/games/memoryMatrix/screens/HelpScreen",
        Display: "com/lumoslabs/utils/Display"
        //movieClip: "libs/movieclip-0.6.1.min"
    },
    shim: {
        createjs: {
            exports: "createjs"
        }
    }
});

// Start the main app logic.
require(["MemoryMatrixGame", "createjs", "util"],
    function (MemoryMatrixGame, createjs, util) {

        var loader;
        var manifest = [
            {src: "/images/startButtonSS.png", id: "startButtonSS"},
            {src:"/images/helpButtonSS.png", id:"helpButtonSS"},
            {src:"/images/background.png", id:"background"},
        ];
        loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(manifest, true, "assets");

        function handleComplete() {
            document.getElementById("loader").className = "";

            var memoryMatrixGame;
            var stage = new createjs.Stage(document.getElementById('stage'));
            stage.enableMouseOver(30);
            memoryMatrixGame = new MemoryMatrixGame(loader, stage);
            console.log(memoryMatrixGame.getGameWidth());
        }
    });