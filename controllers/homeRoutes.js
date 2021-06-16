const router = require('express').Router();
const { Cabin, Location, Image } = require('../models');

router.get('/', async (req, res) => {
    try {
        const cabinsData = await Cabin.findAll({
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
                    limit: 1,
                    attributes: [
                        'src',
                    ],
                },
            ],
        });

        const cabins = cabinsData.map(cabin => cabin.get({ plain: true }));

        res.render('home-page', {
            cabins: cabins,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
