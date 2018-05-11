module.exports = function (sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
        book_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estimated_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Every task must have one user.
    Task.associate = function (models) {
        Task.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Books;
};