import { Sequelize, Options } from 'sequelize';
import databaseConfig from '../config/db';

class Database {
  public connection?: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig as Options);
  }
}

const database: Database = new Database();

export default database;
