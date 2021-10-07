'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    // TODO - 4) interact with frontend
    const itemToLookup = request.query.product;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).json(data);
};

module.exports = (app) => {
    app.get(`/users/age`, getListOfAgesOfUsersWithHandler);
};
