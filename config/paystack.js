const paystack = (request) => {
    const MySecretKey = 'Bearer sk_test_xxxx';

    const initializePayment = (form, mycallback) => {
        const options = {

            url : 'https://api.paystack.co/transaction/initialize',
            headers : {

                authorization: MySecretKey,

                'content-type': 'application/json',

                'cache-control': 'no-cache'

            },

    }
    const verifyPayment = (ref, mycallback) => {

    }
    return {initializePayment, verifyPayment};
}