const router = require('express').Router();
const { Cabin, Location, Image } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const cabinData = await Cabin.findByPk(req.params.id, {
            include: [
                {
                    model: Location,
                    attributes: {
                        exclude: [
                            'id',
                        ],
                    },
                },
                {
                    model: Image,
                    attributes: [
                        'src',
                    ],
                },
            ],
        });

        const cabin = cabinData.get({ plain: true });

        res.render('cabin-page', {
            cabin: cabin,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
