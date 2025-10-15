
const User = {
    name: "kapil",
    email: "singhkapil347@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    //prototypal inheritance
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User


//modern Syntax:
//(child, parent)
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "Kapil Yadav            "

String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength();


