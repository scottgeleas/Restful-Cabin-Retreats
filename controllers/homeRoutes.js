const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('./layouts/base');
});

module.exports = router;
