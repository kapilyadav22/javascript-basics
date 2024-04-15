const cart = ['shoes', 'pants', 'kurta'];

//callback_hell -> callbacks inside callback
//UnReadable and Unmaintable
api.createOrder(cart, () => {
    api.proceedToPayment(()=>{
        api.showOrderSummary(()=> {
            api.updateWallet();
        });
    });
})

/*
proceed to payment should only execute after creating an order, so its an async task,
so, we can pass this as callback function.

createOrder function responsibility is to manage the callback function proceedToPayment,
and proceedToPayment responsibility is to manage the cb function showOrderSummary

Because of its structure, it is called as pyramid of DOOM
*/


