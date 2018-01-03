var bl = require('./bl');

// CRUD
function read(callback) {

    bl.customers.getCustomers(function(err, custArray) {
        if (err) {
            callback(err);
        }

        callback(null, custArray);
    })
}


module.exports.Read = read;