import { config } from "dotenv";
import { Sequelize } from "sequelize";
config();

const databaseConfig = {
    dialect: 'postgres' as 'postgres',
    host: process.env.PG_HOST,
    port: process.env.PG_PORT ,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    define: {
      timestamps: true,
    },
  };

  const sequelize = new Sequelize(databaseConfig);
  

  export default sequelize;