define(function () {
    var singleton;
    singleton = function () {
        return {
            inherits: function (ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            }
//            loader: function () {
//                var loader;
//                var manifest = [
//                    {src: "/images/playButton.png", id: "playButtonImage"}
//                ];
//                loader = new createjs.LoadQueue(false);
//                loader.addEventListener("complete", handleComplete);
//                loader.loadManifest(manifest, true, "assets");
//
//                function handleComplete() {
//                    document.getElementById("loader").className = "";
//                }
//                return loader;
//            }
        };
    };
    return singleton();
})
;




