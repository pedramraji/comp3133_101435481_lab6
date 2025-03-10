"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, _age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = _age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
        this.GetAge();
    };
    Customer.prototype.GetAge = function () {
        console.log("The customer's age is: ".concat(this._age));
        return this._age;
    };
    return Customer;
}());
exports.Customer = Customer;
