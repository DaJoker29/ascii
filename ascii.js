var a = " ";
var b = "_";
var c = "|";
var d = "\\";
var e = "\/";

var map = [
    [ a, a, a, a, b, b, b, b, b, a, a, a, a, a, b, b, b, b, b, a, a, a, b, a, a, a, b, a, a, a, b, a, a, a, b, b, b, b, b, b, b, a, a, a, b, b, b, b, b, b, b, b, b, a, a, a, b, b, b, b, b, b, b, b, b, a],
    [ a, a, a, c, a, a, b, b, a, d, a, a, a, c, a, a, b, b, b, c, a, c, a, c, a, c, a, c, a, c, a, c, a, c, b, b, a, a, a, b, b, c, a, c, b, b, b, a, a, a, b, b, b, c, a, c, b, b, b, a, a, a, b, b, b, c],
    [ a, a, a, c, a, c, a, a, d, a, d, a, a, c, a, c, b, b, a, a, a, c, a, c, a, c, a, c, a, c, a, c, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a],
    [ a, a, a, c, a, c, a, a, a, d, a, d, a, c, a, a, b, b, c, a, a, c, a, c, a, c, a, c, a, c, a, c, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a],
    [ a, a, a, c, a, c, a, a, a, e, a, e, a, c, a, c, a, a, a, a, a, c, a, c, a, c, a, c, a, c, a, c, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a],
    [ a, a, a, c, a, c, b, b, e, a, e, a, a, c, a, c, b, b, b, a, a, c, a, c, b, c, a, c, b, c, a, c, a, a, b, b, c, a, c, b, b, a, a, a, a, a, a, c, a, c, a, a, a, a, a, a, a, a, a, c, a, c, a, a, a, a],
    [ a, a, a, c, b, b, b, b, b, e, a, a, a, c, b, b, b, b, b, c, a, a, d, b, b, b, e, d, b, b, e, a, a, c, b, b, b, b, b, b, b, c, a, a, a, a, a, c, b, c, a, a, a, a, a, a, a, a, a, c, b, c, a, a, a, a]
];

for(var i = 0, len = map.length; i < len; i++) {
    console.log(map[i].join(""));
}