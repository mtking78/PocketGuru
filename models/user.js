// *** User Model
// =============================================================

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1, 50]}
        }
    });

    // // Use when user sign-in is functional.
    // User.associate = function(models) {
    //     User.hasMany(models.Task, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};