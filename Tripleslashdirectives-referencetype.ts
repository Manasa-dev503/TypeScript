/// <reference types="node" />
import * as fs from 'fs'
const filedata = fs.readFileSync("sample.txt")
console.log(filedata.toString())