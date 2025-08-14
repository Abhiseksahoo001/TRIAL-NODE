const mongoose = require('mongoose');
// Define the schema for a person

const personSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    Age:{
        type: Number,
        
    },
    work: {
        type: String,
        enum:['chef', 'manager', 'waiter'],
        required: true,
    },
    mobile:{
        type : String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    address:
    {
        type: String,
        required: true,
    },
    salary:
    {
        type: Number,
        required: true,
    }
})
//create a model from the schema
const Person = mongoose.model('Person', personSchema);
module.exports = Person