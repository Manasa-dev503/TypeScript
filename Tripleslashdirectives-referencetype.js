"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
var fs = require("fs");
var filedata = fs.readFileSync("sample.txt");
console.log(filedata.toString());
