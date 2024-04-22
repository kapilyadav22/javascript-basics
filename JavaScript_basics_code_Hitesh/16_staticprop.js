class User {
    constructor(username) {
        this.username = username
    }

    LogMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const kapil = new User('kapil');
// console.log(kapil.createId()); //error

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com');
iphone.LogMe();
console.log(iphone.createId()); //error