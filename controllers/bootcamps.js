const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const data = await Bootcamp.find();

        if(!data){ //gets triggered if correct format but data doesnt exist
            return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
        }

        res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (err) {
        next(err);
    }
}

// @desc    Get a single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const data = await Bootcamp.findById(req.params.id);
        if(!data){ //gets triggered if correct format but data doesnt exist
            return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
        }
        res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) { //Only gets triggered if wrong format
        next(err);
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
        next(err);
    }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    
    try {
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
    } catch (err) {
        next(err);
    }
}

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const data = await Bootcamp.findByIdAndUpdate(req.params.id);

        if(!data){ //gets triggered if correct format but data doesnt exist
            return next(new ErrorResponse(404, 'Sorry, this Resource doesnt exist..'));  
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    } 
}