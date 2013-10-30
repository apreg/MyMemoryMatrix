define(["createjs"], function (createjs) {


    function Display() {

    }

    Display.removeIfChild = function (container, disObj) {
        //TODO: check for Container type
        if (container !== null && disObj !== null && disObj.parent == container) {
            container.removeChild(disObj);
        }
        return;
    };

    Display.removeIfChildren = function (container) {
        //TODO: check for Container type
        var arg = null;
        if (container !== null) {
            var i = 1;
            while (i < arguments.length) {
                arg = arguments[i];
                //TODO: understand equals
                if (arg != null && arg.parent == container) {
                    container.removeChild(arg);
                }
                i++;
            }
        }
    };
    /*
     Display.prototype.removeIfChildren = function (param1, param2) {

     public
     static
     function removeIfChildren(param1

     :
     DisplayObjectContainer,
     ...
     args
     ) :
     void
     {
     args = null;
     if (param1 != null) {
     for each(args in args)
     {

     if (args != null) {
     }
     if (_loc_5.parent == param1) {
     param1.removeChild(args);
     }
     }
     }
     return;
     }// end function
     */
    return Display;
})
;