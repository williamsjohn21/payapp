const {mongoose} = require('./../config/mongoose');
const donorSchema = new mongoose.Schema({
    full_name: {

        type: String,

        required: true,

    },
    
}