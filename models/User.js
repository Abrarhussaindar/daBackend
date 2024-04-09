const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Address:{
        type: String,
    },
    Gender:{
        type: String,
    },
    DOB:{
        type: String,
    },
    
    Email:{
        type: String,
        require: true
    },
    PinCode:{
        type: String,
        max: 6,
    },
    PinArea:{
        type: String,
    },
    PhoneNumber: {
        type: String,
        max: 9
    },
    AdhaarNumber: {
        type: String,
        max: 11
    },
    MaritalStatus:{
        type: String,
    },
    Religion:{
        type: String,
    },
    OtherReligion:{
        type: String,
    },
    Category:{
        type: String,
    },
    SocailClass:{
        type: String,
    },
    AgeGroup:{
        type: String,
    },
    MFI:{
        type: String,
    },
    role:{
        type: String,
        default: "user"
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);