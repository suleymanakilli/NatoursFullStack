const express = require('express');
const app = express()
const tourController = require('../controllers/tourController')

const router = express.Router()


router.use('/:id', (req, res, next) => {
    tourController.checkId(req, res, next, req.params.id)
})

router.route('/')
    .get(tourController.getAllTours)
    .post((req, res, next) => tourController.checkBody(req, res, next), tourController.createTour)

router.route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router;