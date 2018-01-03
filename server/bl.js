var dal = require('./dal');
var models = require('./models');


function getCustomers(callback) {
    dal.executeQuery('SELECT * FROM `customers`', function(err, rows) {
        if (err) {
            callback(err);
        }

        const customersObjectsArray = [];
        rows.forEach(function (row) {
            customersObjectsArray.push(new models.Customer(row));
        });
        callback(null, customersObjectsArray);
    });
}

// module.exports.getCustomers = getCustomers;

module.exports.customers = {
    getCustomers: getCustomers
}