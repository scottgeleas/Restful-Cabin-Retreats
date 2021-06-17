const router = require('express').Router();
const { Cabin, Location, Image, User } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        res.render('cabin-page', {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
