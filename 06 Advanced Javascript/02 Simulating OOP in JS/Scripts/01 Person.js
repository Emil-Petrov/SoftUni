function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return{
        name: this.firstName + " " + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName
    }
}