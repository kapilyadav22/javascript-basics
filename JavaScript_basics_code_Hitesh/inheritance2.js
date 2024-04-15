class User {
    constructor(username){
        this.username = username
    }

    LogMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){
        //automatically take username from parent class
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const kapil = new Teacher('kapil','singhkapil347@gmail.com', '123');
kapil.addCourse();

const user = new User('newuser');
user.LogMe();

console.log(kapil===user);  //false

console.log(kapil instanceof Teacher); //true
console.log(kapil instanceof User); //true

