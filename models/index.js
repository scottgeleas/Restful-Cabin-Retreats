// import models
const User = require('./user');
const Reservation = require('./reservation');
const Cabin = require('./cabin');
const Location = require('./location');

User.hasMany(Reservation, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Reservation.belongsTo(User, {
    foreignKey: 'user_id'
});

Reservation.belongsTo(Cabin, {
    foreignKey: 'cabin_id'
});

Cabin.hasMany(Reservation, {
    foreignKey: 'cabin_id',
    onDelete: 'CASCADE'
});

Cabin.belongsTo(Location, {
    foreignKey: 'location_id'
});

Location.hasMany(Cabin, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Reservation, Cabin, Location };