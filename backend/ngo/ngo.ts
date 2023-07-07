import Sequelize from "sequelize";
import database from "../config/database";

export const Ngo = database.define("ngo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.DataTypes.GEOMETRY("POINT"),
    allowNull: false,
  },
});
