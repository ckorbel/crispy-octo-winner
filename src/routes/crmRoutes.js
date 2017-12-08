var express = require('express')
var app = express()
var router = express.Router();
import  { addNewContact, 
            getContacts, 
            getContactsWithID, 
            updateContact 
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
    .put(updateContact); 

    app.delete((req, res) => {
        res.send("DELETE request successfull")
    });
    
}

// export default routes;

// module.exports = app;

    // app.route('/contact')
    // .get((req, res) => 
    // res.send("GET request successfull!!"))

    // .post.route((req, res) => 
    // res.send("POST request successfull!!"));

    // //new route
    // app.route('/contact/:contactId')
    // .put((req, res) => 
    // res.send("PUT request successfull!!"))

    // .delete.route((req, res) => 
    // res.send("DELETE request successfull!!"));