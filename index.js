// Write your solution in this file!
const employee = {
    name: 'Bob',
    streetAddress: '600 Milky Way',
};

// SPREAD OPERATOR ...
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
   obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key, value) {
    return {
        ...obj,
        [key]: value,
     };
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};
