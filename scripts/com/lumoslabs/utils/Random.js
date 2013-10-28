define(["createjs", "util"], function Random(createjs, util) {
       var anElement;

    Random.otherIntBetween = function (param1, param2, param3) {
        var _loc_4 = new Array();
        var _loc_5 = param1;
        while (_loc_5 <= param2)
        {
            _loc_4.push(_loc_5);
            _loc_5 = _loc_5 + 1;
        }
        return this.otherElement(_loc_4, param3);
    };

    Random.otherElement = function (param1, param2) {
        var _loc_4 = 0;
        var _loc_3 = param1.slice();
        var i = 0;
        while (i < param2.length)
        {
            this.anElement = param2[i++];
            _loc_4 = _loc_3.indexOf(this.anElement);
            while (_loc_4 >= 0)
            {
                _loc_3.splice(_loc_4, 1);
                _loc_4 = _loc_3.indexOf(this.anElement);
            }
        }
        //http://www.javascriptexamples.org/2011/01/18/how-to-find-the-integer-part-of-a-number-in-javascript/
        return _loc_3[~~(Math.random() * _loc_3.length)];
    };


    return Random
});