const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        let users = await User.findAll();
        let UserData = users.map(item => {
            return item.get({ plain: true })
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body,
        });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No users found with this id!' });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
