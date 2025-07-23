import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/sequelize'

const User = sequelize.define(
    'User', 
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)

export default User;