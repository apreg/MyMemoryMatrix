requirejs.config({
    //The baseUrl is normally set to the same directory as the script used in a data-main attribute
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    //baseUrl: "/scripts",
    paths: {
        createjs: "libs/createjs-2013.05.14.min",
        TweenMax: "libs/TweenMax.min",
        MemoryMatrixGame: "com/lumoslabs/games/memoryMatrix/MemoryMatrixGame",
        util: "com/lumoslabs/utils/Util",
        //loader: "com/lumoslabs/utils/Loader",
        StartScreen: "com/lumoslabs/games/memoryMatrix/screens/StartScreen",
        HelpScreen: "com/lumoslabs/games/memoryMatrix/screens/HelpScreen",
        EndScreen: "com/lumoslabs/games/memoryMatrix/screens/EndScreen",
        Display: "com/lumoslabs/utils/Display",
        Library: "com/lumoslabs/utils/lib",
        PlayScreen: "com/lumoslabs/games/memoryMatrix/screens/PlayScreen",
        Board:   "com/lumoslabs/games/memoryMatrix/Board",
        Random:   "com/lumoslabs/utils/Random",
        Tile:   "com/lumoslabs/games/memoryMatrix/Tile"
        //movieClip: "libs/movieclip-0.6.1.min"
    },
    shim: {
        createjs: {
            exports: "createjs"
        }
    }
});

// Start the main app logic.
require(["MemoryMatrixGame", "createjs", "util", "Library"],
    function (MemoryMatrixGame, createjs, util, lib) {

        var loader;
        var images = {};
        var manifest = [
            {src: "/images/startButtonSS.png", id: "startButtonSS"},
            {src:"/images/helpButtonSS.png", id:"helpButtonSS"},
            {src:"/images/background.png", id:"background"},
            {src:"/images/image12.jpg", id:"image12"},
            {src:"/images/image44.png", id:"image44"},
            {src:"/images/image48.png", id:"image48"},
            {src:"/sounds/Splat.mp3", id:"Splat"},
            {src:"/sounds/Paper15.mp3", id:"Paper15"},
            {src:"/sounds/Paper11.mp3", id:"Paper11"},
            {src:"/sounds/Boing.mp3", id:"Boing"},
            {src:"/sounds/Bell.mp3", id:"Bell"}
        ];
        loader = new createjs.LoadQueue(false);
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin]);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(manifest, true, "assets");

        function handleFileLoad(evt) {
            if (evt.item.type == "image") { lib.img[evt.item.id] = evt.result; }
        }

        function handleComplete() {
            document.getElementById("loader").className = "";
            lib.loader = loader;
            var memoryMatrixGame;
            var stage = new createjs.Stage(document.getElementById('stage'));
            stage.enableMouseOver(30);
            memoryMatrixGame = new MemoryMatrixGame(stage);
        }
    });