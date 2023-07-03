"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var env_1 = require("./env");
var port = env_1.PORT || 8080;
app_1.app.listen(port, function () { return console.info("Server running on port ".concat(port)); });
