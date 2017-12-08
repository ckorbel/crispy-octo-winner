let mongoose = require('mongoose');
// let Contact = mongoose.model('Contact');
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res)=> {
    let newContact = new Contact(req.body);

    newContact.save((err, contact)=> {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });      
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact)=> {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    }); 
};

export const getContactsWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact)=> {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate( {_id: req.params.contactId}, req.body, { new: true }, (err, contact)=> {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};