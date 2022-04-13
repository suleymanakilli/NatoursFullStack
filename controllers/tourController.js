const fs = require('fs')
const path = require('path')
const tours = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'dev-data', 'data', 'tours-simple.json'))
);


exports.checkId = (req, res, next, val) => {
    if (val * 1 > tours.length) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Invalid ID'
        })
    }
    next()
}

exports.checkBody = (req, res, next, val) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: "Fail",
            message: "Missing name or price"
        })
    }
    next();
}

exports.getAllTours = (req, res) => {
    return res.status(200).json({
        status: "Success",
        results: tours.length,
        data: {
            tours
        }
    })
}

exports.getTourById = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    if (tour) {
        return res.status(200).json({
            status: "Success",
            data: {
                tour
            }
        })
    }
    else {
        return res.status(404).json({
            status: "Fail",
            message: "Could not find"
        })
    }
}

exports.createTour = (req, res) => {
    console.log("body : ", req.body)

    return res.status(201).json({
        status: "Success",
        data: req.body,
        message: "Successfuly added"
    })
}
exports.updateTour = (req, res) => {
    console.log("body : ", req.body)

    return res.status(201).json({
        status: "Success",
        data: req.body,
        message: "Successfuly updated"
    })
}
exports.deleteTour = (req, res) => {
    console.log("body : ", req.body)

    return res.status(201).json({
        status: "Success",
        data: null,
        message: "Successfuly deleted"
    })
}