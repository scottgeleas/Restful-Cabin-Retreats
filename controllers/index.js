const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require("./api");
const cabinRoutes = require('./cabinRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/cabins', cabinRoutes);

module.exports = router;
