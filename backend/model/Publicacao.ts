import Sequelize from "sequelize";
import database from "../config/database";
import Ong from "./Ong";


const Publicacao = database.define('publicacao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ongId: {
        type: Sequelize.INTEGER,
        references: {
            model: Ong,
            key: 'id',
        }
    },
    dataPostagem: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },

})

Publicacao.sync();

export = Publicacao;