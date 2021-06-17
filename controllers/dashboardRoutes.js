const router = require('express').Router();
const { Reservation, Cabin } = require('../models');

router.get('/', async (req, res) => {
    try {
        const reservationData = await Reservation.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: Cabin
            }],
        });

        const reservations = reservationData.map(reservation => reservation.get({ plain: true }));
        res.status(200).json(reservations)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;