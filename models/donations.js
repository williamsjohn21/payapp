const {mongoose} = require('./../config/mongoose');
const donorSchema = new mongoose.Schema({
    full_name: {

        type: String,

        required: true,

    },
    email: {

        type: String,

        required: true,

    },
    amount: {

        type: Number,

        required: true,

    },
    reference: {

        type: String,

        required: true

    }
}