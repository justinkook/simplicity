const mongoose = require('mongoose');

/* --- PHASE 1 - WRITE THE INVENTORY MODEL --- */

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var employeeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    officeNum: {
        type: String,
        trim: true,
        unique: true,
        required: "Office Number is Required"
    },
    phoneNum: {
        type: String,
        trim: true,
        unique: true,
        required: "Phone Number is Required"
    }
});
// This creates our model from the above schema, using Mongoose's model method
const EmployeeList = mongoose.model("EmployeeList", employeeSchema);

// Export the Inventory model
module.exports = EmployeeList;
