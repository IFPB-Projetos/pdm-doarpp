import Sequelize from "sequelize";
import database from "../config/database";

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

Usuario.sync();

export = Usuario;