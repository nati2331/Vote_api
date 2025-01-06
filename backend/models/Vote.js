const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Vote = db.define('Vote', {
    option: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

module.exports = Vote;
