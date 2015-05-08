"use strict";
var ansi = require("ansi-escape-sequences");

exports["ansi-underline"] = function(input){
    return ansi.format(input, "underline");
};
