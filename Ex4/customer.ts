export class Customer {

private firstName: String;
private lastName: String;
private _age: number


constructor(firstName, lastName, _age){

    this.firstName = firstName;
    this.lastName = lastName;
    this._age = _age;
}

public greeter(){

    console.log(`Hello ${this.firstName} ${this.lastName}`)

    this.GetAge()

}

public GetAge(): number {
    console.log(`The customer's age is: ${this._age}`);
    return this._age;
}


}
  

  


