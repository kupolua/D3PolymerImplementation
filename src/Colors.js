"use strict";

function Colors() {
    var getColor = function(colorIndex) {
        var colorsTable = [
            {"color": d3.rgb(53, 68, 88)},
            {"color": d3.rgb(58, 154, 217)},
            {"color": d3.rgb(41, 171, 164)},
            {"color": d3.rgb(233, 224, 214)},
            {"color": d3.rgb(235, 114, 96)},
            {"color": d3.rgb(66, 152, 181)},
            {"color": d3.rgb(173, 196, 204)},
            {"color": d3.rgb(146, 176, 106)},
            {"color": d3.rgb(225, 157, 41)},
            {"color": d3.rgb(221, 95, 50)},
            {"color": d3.rgb(188, 207, 2)},
            {"color": d3.rgb(91, 177, 47)},
            {"color": d3.rgb(115, 197, 225)},
            {"color": d3.rgb(155, 83, 156)},
            {"color": d3.rgb(235, 101, 160)},
            {"color": d3.rgb(255, 162, 0)},
            {"color": d3.rgb(0, 160, 62)},
            {"color": d3.rgb(36, 168, 172)},
            {"color": d3.rgb(0, 135, 203)},
            {"color": d3.rgb(152, 35, 149)}
        ];

        if(colorIndex == null) {
            return linkedListNullColor();
        }
        
        if(colorIndex == "white") {
            return linkedListTextColor();
        }

        var index = Math.floor(colorIndex);

        if(index > colorsTable.length - 1 || index < 0) {
            var _index = colorIndex.toString().substr(colorIndex.toString().length - 1, 1);

            return colorsTable[_index].color;
        } else {
            
            return colorsTable[index].color;
        }
    };
    var linkedListNullColor = function() {
        return d3.rgb(255, 76, 101);
    };
    var linkedListTextColor = function() {
        return d3.rgb(255, 255, 255);
    };

    return {
        getColor: function(colorIndex) {
            return getColor(colorIndex);
        }
    }
};