var CustomerV1 =  (function () {
    function CustomerV1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CustomerV1.prototype.greeter = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "."));
    };
    return CustomerV1;
}());
// Create a Customer object
var customerV1 = new CustomerV1("John", "Doe");
customer.greeter();
