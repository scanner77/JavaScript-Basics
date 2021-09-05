function User(name, email){
    this.name = name,
    this.email = email,
    this.online = false;
    // this.login = function(){
    //     console.log(this.email + " has logged in!!")
    // }
}
//We are making User constructor where we are initializing an object with different values

/* ---------We can only use prototype with the constructor function. But we cannot use ".prototype with instancnes" */

User.prototype.login = function(){
    this.online = true;
    console.log(this.email + " has logged in!!")
}

var userOne = new User("Laxman", "bistalaxman5@gmail.com"); //Here we are creating an instance of an User Constructor
var userTwo = new User("Ayush", "ayushkarki@gmail.com");



console.log(userOne)
userTwo.login();

//Every Object type will have a prototype property. For example, an array has a prototype,  a date has a prototype