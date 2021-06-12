const router = require('express').Router();
const { Locations } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
      const newLocation = await Location.create({
        req.body
      });
  
      res.status(200).json(newLocation);
    } catch (err) {
      res.status(400).json(err);
    }
  });