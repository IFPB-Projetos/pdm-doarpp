"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT;
