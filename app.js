const express = require('express');
const ExpressError = require('./expressError');
const helpers = require('./helpers');

const app = express();

app.use(express.json());


// routes

app.get('/mean', (request, response) => {
    if (!request.query.query) {
        throw new ExpressError('You must pass a list of numbers.', 400);
    }

    const numArr = helpers.typeCheck(request);
    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message);
    }
    const result = helpers.mean(numArr);

    const res = {
        response: {
            operation: 'mean',
            value: result
        }
    }

    return response.json(res);
});

app.get('/median', (request, response) => {
    if (!request.query.query) {
        throw new ExpressError('You must pass a list of numbers.', 400);
    }

    const numArr = helpers.typeCheck(request);
    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message);
    }
    const result = helpers.median(numArr);

    const res = {
        response: {
            operation: 'median',
            value: result
        }
    }

    return response.json(res);
});

app.get('/mode', (request, response) => {
    if (!request.query.query) {
        throw new ExpressError('You must pass a list of numbers.', 400);
    }

    const numArr = helpers.typeCheck(request);
    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message);
    }
    const result = helpers.mode(numArr);

    const res = {
        response: {
            operation: 'mode',
            value: result
        }
    }

    return response.json(res);
});


// general error handler

app.use((error, request, response, next) => {
    response.status(error.status || 500);

    return response.json({
        error: error,
        message: error.message
    });
});

app.listen(5050, () => {
    console.log('App on port 5050');
});