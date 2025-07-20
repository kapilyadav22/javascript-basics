// Currying vs Partial application


//Partial Application
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}


//Using Curring
function sum2(a) {
    return (b) => {
        return (c) => a * b * c
    }
}


