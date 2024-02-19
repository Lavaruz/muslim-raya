"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require("."); // Pastikan Anda mengganti path sesuai dengan struktur direktori Anda
class Chat extends sequelize_1.Model {
}
Chat.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    chat_name: sequelize_1.DataTypes.STRING,
    // timestamps
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: "chat",
    sequelize: // Nama tabel di database
    _1.sequelize, // Instance Sequelize yang digunakan
});
exports.default = Chat;
//# sourceMappingURL=Chat.js.map