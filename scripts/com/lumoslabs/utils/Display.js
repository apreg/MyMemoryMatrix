define(["createjs"], function (createjs) {


    function Display() {

    };

    Display.prototype.removeIfChild = function (param1, param2) {
        if (param1 != null) {
        }
        if (param2 != null) {
        }
        if (param2.parent == param1) {
            param1.removeChild(param2);
        }
        return;
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