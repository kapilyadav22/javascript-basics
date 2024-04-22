/*

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password;
    }

   
    set password(value){
        this.password = value
    }
}

//It will give stack overflow, because constructor is also setting the value, and set password() is also
//setting the value
const user = new User('singhkapil347@gmail.com', '123456');

console.log(user);

*/

class User2{
    constructor(email,password){
        this.email = email;
        //our constructor is not setting the password, because it is overriding by getters and setters
        this.password = password;
    }

    
    get email(){
        return this._email;
    }

    set email(value){
        return this._email = value;
    }
    //get the password with _
    get password(){
        return this._password;
    }

   //set the password with _
    set password(value){
        this._password = value;
    }
}

const user2 = new User2('singhkapil347@gmail.com', '123456');

console.log(user2.email);
console.log(user2.password);
