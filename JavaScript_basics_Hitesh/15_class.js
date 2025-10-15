//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

}

const kapil = new User("kapil", "singhkapil347@gmail.com", "12345");
console.log(kapil.encryptPassword());


//Behind the scenes
function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const kapil2 = new User2("kapil2", "singhkapil1347@gmail.com", "123456");
console.log(kapil.encryptPassword());

