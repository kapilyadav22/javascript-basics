
this.a = 5;
// function getParam() {
//     console.log(this.a);
// }

const getParam = () => {
    console.log(this.a);
}

getParam();

/*
this is targetting the global object
 */
