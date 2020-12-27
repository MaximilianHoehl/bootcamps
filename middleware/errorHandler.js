//Get called by next() function of controllers
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    console.log(err);
    let error = { ...err };
    error.message = err.message;

    //Mongoose-error bad ObjectId
    if(err.name === 'CastError'){ //Currently broken.. err.name is just Error
        const message = `Resource of id ${err.value} not found`;
        error = new ErrorResponse(404, message);
    }
    //Mongoose-error dublicate key
    if(err.code === 11000){
        const message = 'Duplicate field value entered!'
        error = new ErrorResponse(400, message);
    }
    //Mongoose-error validation
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);;
        error = new ErrorResponse(400, message);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;