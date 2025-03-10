var CustomerV3 =  (function () {
    function CustomerV3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CustomerV3.prototype.greeter = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "."));
    };
    return CustomerV3;
}());
// Create a Customer object
var customerV3 = new CustomerV3("John", "Doe");
customerV3.greeter();
