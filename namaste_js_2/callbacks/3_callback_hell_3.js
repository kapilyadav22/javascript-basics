const cart = ['shoes', 'pants', 'kurta'];

//inversion of control
api.createOrder(cart, () => {
    api.proceedToPayment();
})


/*
We gave the control of proceedToPayment to createOrder api, we are blindly trusting createOrder API,
that it should call our cb function,
*/

/*
RECAP:
0. Importance of Callbacks - to perform async tasks
1. Issues with Callbacks - 
    a. Callback hell
    b. Inversion of Control

*/


