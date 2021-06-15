const router = require('express').Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  try {
    let reservations = await Reservation.findAll();
    let reservationData = reservations.map(item => {
      return item.get({ plain: true })
    })
    res.status(200).json(reservationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newReservation = await Reservation.create({
      ...req.body,
    });
    res.status(200).json(newReservation);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const reservationData = await Reservation.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!reservationData) {
      res.status(404).json({ message: 'No reservations found with this id!' });
      return;
    }

    res.status(200).json(reservationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;