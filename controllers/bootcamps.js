const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const data = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const data = await Bootcamp.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        res.status(400).json({
            success: false
        });
    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const data = await Bootcamp.create(req.body); //If there is an key in the body that doesnt exist in the model, it won't be added to the database

        res.status(201).json({
            success: true,
            data: data
        });   
    } catch (err) {
        res.status(400).json({
            success: false,
            data: null
        });
        console.log(err);
    }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!Bootcamp) {
        return res.status(400).json({success: flase});
    }

    res.status(200).json({
        success: true,
        data: data
    });
}

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const data = await Bootcamp.findByIdAndUpdate(req.params.id);

        if(!data) {
            return res.status(400).json({success: false});
        } 
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({success: false});
    } 
}