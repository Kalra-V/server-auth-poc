import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgresql://postgres:kutakutakuta@localhost', {
    dialect: 'postgres',
    logging: false
})