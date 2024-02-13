var fullname = "Kapil yadav"

var obj = {
    fullname: "Hacked Full Name",

    prop: {
        fullname: "Inside Prop",
        getFullname: function() {
            return this.fullname;
        },
    },

    getFullname: function() {
        return this.fullname;
    },

    getFullnameV2: () => this.fullname,
    
    getFullnameV3:(function () {
        return this.fullname;
    })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3);

/*
OUTPUT:
Inside Prop
Hacked Full Name
undefined
Hacked Full Name

In Arrow function, this refers to window object/global object.
IIFE returns the property, and iife doesnt have this, so will return undefined.
otherwise if you return hardcoded string from iife, it will print it.
*/