'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (product) => {
    // TODO - 5) Return data structure to frontend catch error
    const dataAccessMethod = () => {
        const matchedUsers = []
        if (product) {
            _.map(db.itemsOfUserByUsername, (user, index) => {
                if(user.indexOf(product) >= 0) {
                    matchedUsers.push(index)
                }
            })
        }
        return matchedUsers
    }
    const callDataAccessMethod = dataAccessMethod()
    return mockDBCall(callDataAccessMethod);

}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};

// var arr = [{key:"11", value:"1100"},{key:"22", value:"2200"}];
// var object = arr.reduce(
//   (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});

// console.log(object)

        // const array = db.itemsOfUserByUsername
        // const object = array.reduce(
        //     (obj, item) => Object.assign(obj, {[item.key]: item.value}, {})
        // )