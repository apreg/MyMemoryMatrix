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
        //movieClip: "libs/movieclip-0.6.1.min"
    },
    shim: {
        createjs: {
            exports: "createjs"
        }
    }
});

// Start the main app logic.
require(["MemoryMatrixGame", "createjs"],
    function (MemoryMatrixGame, createjs) {

        var manifest = [
            {src:"/images/playButton.png", id:"playButtonImage"}
        ];
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(manifest, true, "assets");

        function handleComplete() {
            document.getElementById("loader").className = "";

            var memoryMatrixGame;
            var stage = new createjs.Stage(document.getElementById('stage'));
            stage.enableMouseOver(true);
            memoryMatrixGame = new MemoryMatrixGame(loader, stage);
            console.log(memoryMatrixGame.getGameWidth());
        }


    });