define(function () {
    var singleton;
    singleton = function () {
        return {
            inherits: function (childObject, parentObject) {
                // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject
                // So the copyOfParent object now has everything the parentObject has
                var copyOfParent = Object.create(parentObject.prototype);

                //Then we set the constructor of this new object to point to the childObject.
                //This step is necessary because the preceding step overwrote the childObject constructor when it overwrote the childObject prototype (during the Object.create() process)
                copyOfParent.constructor = childObject;

                // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
                childObject.prototype = copyOfParent;

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
});




