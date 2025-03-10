var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.greet = function () {
        return "Hello from the Customer class!";
    };
    return Customer;
}());
// Create a Customer object
var customer = new Customer("John", "Doe");
console.log(Customer.greet());
