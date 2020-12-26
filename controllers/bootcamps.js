const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Show all bootcamps'});
}

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `get bootcamp with id ${req.params.id}` });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    console.log(req.body);
    res
        .status(200)
        .json({ success: true, msg: 'Created new bootcamp' });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Updated bootcamp ${req.params.id}` });
}

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Deleted bootcamp ${req.params.id}` });
}