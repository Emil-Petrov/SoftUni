function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Object.defineProperty(Person.prototype, 'name', {
    get: function(){
        return this.firstName + " " + this.lastName
    },
    set: function(){
        if (arguments[0].split(' ').length > 1){
            this.firstName = arguments[0].split(' ')[0];
            this.lastName = arguments[0].split(' ')[1];
        }else{
            this.firstName = arguments[0];
            this.lastName = "";
        }
        return this.firstName + ' ' + this.lastName;
    }
});