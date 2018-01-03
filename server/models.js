function Customer(cust) {
    this.CustomerID = cust['CustomerID'];
    this.CompanyName = cust['CompanyName'];
    this.ContactName = cust['ContactName'];
    this.ContactTitle = cust['ContactTitle'];
    this.Address= cust['Address'];
    this.City= cust['City'];
    this.Region= cust['Region'];
    this.PostalCode= cust['PostalCode'];
    this.Country= cust['Country'];
    this.Phone= cust['Phone'];
    this.Fax= cust['Fax'];
}

module.exports.Customer = Customer;