class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static greet(): string {
        return "Hello from the Customer class!";
    }
}

// Create a Customer object
const customer = new Customer("John", "Doe");
console.log(Customer.greet());
