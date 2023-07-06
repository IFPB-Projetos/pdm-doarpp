import Sequelize from "sequelize";
import database from "../config/database";


const Ong = database.define('ong', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    },
    telefone: {
        type: Sequelize.STRING,
    },
    local: {
        type: Sequelize.DataTypes.GEOMETRY("POINT"),
        allowNull: false
    }
})

Ong.sync();

export = Ong;

