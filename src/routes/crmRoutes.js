var express = require('express')
var app = express()
var router = express.Router();
import  { addNewContact, 
            getContacts, 
            getContactsWithID, 
            updateContact,
            deleteContact 
} from '../controllers/crmController';


module.exports = (app) => {
    app.route('/contact')
    .get((req, res, next)=> {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    //POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get sepcific contact by Id
    .get(getContactsWithID)

    //put request
    .put(updateContact) 

    .delete(deleteContact);
    
}
