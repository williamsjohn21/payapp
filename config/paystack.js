const paystack = (request) => {
    const MySecretKey = 'Bearer sk_test_xxxx';

    const initializePayment = (form, mycallback) => {
        const options = {

            url : 'https://api.paystack.co/transaction/initialize',

    }
    const verifyPayment = (ref, mycallback) => {

    }
    return {initializePayment, verifyPayment};
}