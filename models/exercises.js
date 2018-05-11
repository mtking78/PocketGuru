module.exports = function (sequelize, DataTypes) {
    var Exercises = sequelize.define("Exercises", {
        exercise_name: {
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

    return Exerises;
};