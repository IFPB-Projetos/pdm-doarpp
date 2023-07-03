"use strict";
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function imprimir() {
    console.log(process.env.PORT);
}
module.exports = { imprimir: imprimir };
// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USERNAME, process.env.PG_PASSWORD, {
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     dialect: 'postgres'
//   });
