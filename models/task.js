// *** Burger Model
// =============================================================

module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        // *** delete/change these to Tasks
    //     burger_name: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {len: [1, 50]}
    //     },
    //     devoured: {
    //         type: DataTypes.BOOLEAN,
    //         defaultValue: false
    //     }
    });

    // Burger.associate = function(models) {
    //     Burger.belongsTo(models.Eater, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Task;
};