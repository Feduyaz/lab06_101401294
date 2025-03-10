class CustomerV3 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): void {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
}

// Create a Customer object
const customerV3 = new CustomerV3("John", "Doe");
customerV3.greeter();
