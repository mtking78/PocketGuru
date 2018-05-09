// *** Burger Model
// =============================================================

module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        task_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
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
        // // Use when user sign-in is functional.
        // UserId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }

    });
    // // Use when user sign-in is functional.
    // // Every task must have one user.
    // Task.associate = function(models) {
    //     Task.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Task;
};