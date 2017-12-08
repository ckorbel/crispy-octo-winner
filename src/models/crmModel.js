let mongoose = require('mongoose');

let ContactSchema = mongoose.Schema ({
    firstName: {
        type: String, 
        required: 'Enter a first name' 
    },
    lastName: {
        type: String, 
        required: 'Enter a last name' 
    },
    email: {
        type: String 
    },
    company: {
        type: String 
    },
    phone: {
        type: Number 
    }, 
    created_date: {
        type: Date,
        default: Date.now
    }
});




mongoose.model('Contact', ContactSchema);