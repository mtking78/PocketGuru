// *** User Model
// =============================================================

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    //     eater_name: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {len: [1, 50]}
    //     }
    });

    // Eater.associate = function(models) {
    //     Eater.hasMany(models.Burger, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};