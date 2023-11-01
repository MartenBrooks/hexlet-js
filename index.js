import _ from "lodash";
import { fn } from "./src/index.js";

console.log("Hello, Hexlet!");
console.log(_.last(["one", "two"]));

const c = fn(1, 10);
console.log(c);