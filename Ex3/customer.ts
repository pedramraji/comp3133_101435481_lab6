class Customer {

private firstName: String;
private lastName: String;


constructor(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
}

public greeter(){

    console.log(`Hello ${this.firstName} ${this.lastName}`)

}

}


let customer = new Customer("John", "Smith");

customer.greeter();