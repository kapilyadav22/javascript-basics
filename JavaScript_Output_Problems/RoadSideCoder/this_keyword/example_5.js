
let user = {
    name: "kapil yadav",
    age: 24,
    childObject: {
        newName: "Programming Hub",
        getDetails() {
            console.log(this.newName, "and", this.name);
        }
    },

};

user.childObject.getDetails();

/*
this is pointing the child object (Immediate parent), but not the parent object
 */