class CustomerV1 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): void {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
}

// Create a Customer object
const customerV1 = new CustomerV1("John", "Doe");

customerV1.greeter(); // Corrected line
