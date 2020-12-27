const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.find();
    res
        .status(200)
        .json({success: true, count: data.length, data: data});
});

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.findById(req.params.id);
    if(!data){ //gets triggered if correct format but data doesnt exist
        return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
    }
    res.status(200).json({
        success: true,
        data: data
    });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.create(req.body); //If there is an key in the body that doesnt exist in the model, it won't be added to the database

    res.status(201).json({
        success: true,
        data: data
    });   
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!data){ //gets triggered if correct format but data doesnt exist
        return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
    }
    res.status(200).json({
        success: true,
        data: data
    });
});

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!data){ //gets triggered if correct format but data doesnt exist
        return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
    }
    res.status(200).json({
        success: true,
        data: {}
    });
});