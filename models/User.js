const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //  genform
    FirstName: {
        type: String,
        default: "",
        require: true
    },
    LastName: {
        type: String,
        default: "",
        require: true
    },
    Address:{
        type: String,
        default: ""
    },
    Gender:{
        type: String,
        default: ""
    },
    DOB:{
        type: String,
        default: ""
    },
    
    Age:{
        type: String,
        default: ""
    },
    
    Email:{
        type: String,
        default: "",
        require: true
    },
    Division:{
        type: String,
        default: ""
    },
    District:{
        type: String,
        default: ""
    },
    Block:{
        type: String,
        default: ""
    },
    PinCode:{
        type: String,
        default: "",
        max: 6,
    },
    PinArea:{
        type: String,
        default: ""
    },
    OtherPinArea:{
        type: String,
        default: ""
    },
    PhoneNumber: {
        type: String,
        default: "",
        max: 9
    },
    AdhaarNumber: {
        type: String,
        default: "",
        max: 11
    },
    MaritalStatus:{
        type: String,
        default: ""
    },
    Religion:{
        type: String,
        default: ""
    },
    OtherReligion:{
        type: String,
        default: ""
    },
    Category:{
        type: String,
        default: ""
    },
    SocailClass:{
        type: String,
        default: ""
    },
    AgeGroup:{
        type: String,
        default: ""
    },
    MFI:{
        type: String,
        default: ""
    },


    // edform
    Qualification:{
        type: String,
        default: ""
    },
    OtherQualification:{
        type: String,
        default: ""
    },
    Stream:{
        type: String,
        default: ""
    },
    OtherStream:{
        type: String,
        default: ""
    },
    Subject:{
        type: String,
        default: ""
    },
    OtherSubject:{
        type: String,
        default: ""
    },
    UnderGradCourse:{
        type: String,
        default: ""
    },
    OtherUnderGradCourse:{
        type: String,
        default: ""
    },
    UnderGradField:{
        type: String,
        default: ""
    },
    OtherUnderGradField:{
        type: String,
        default: ""
    },
    UnderGradBranch:{
        type: String,
        default: ""
    },
    OtherUnderGradBranch:{
        type: String,
        default: ""
    },
    GradCourse:{
        type: String,
        default: ""
    },
    OtherGradCourse:{
        type: String,
        default: ""
    },
    GradField:{
        type: String,
        default: ""
    },
    OtherGradField:{
        type: String,
        default: ""
    },
    GradBranch:{
        type: String,
        default: ""
    },
    OtherGradBranch:{
        type: String,
        default: ""
    },
    PGCourse:{
        type: String,
        default: ""
    },
    OtherPGCourse:{
        type: String,
        default: ""
    },
    PGField:{
        type: String,
        default: ""
    },
    OtherPGField:{
        type: String,
        default: ""
    },
    PGBranch:{
        type: String,
        default: ""
    },
    OtherPGBranch:{
        type: String,
        default: ""
    },
    Mphill:{
        type: String,
        default: ""
    },
    Phd:{
        type: String,
        default: ""
    },
    Prof:{
        type: String,
        default: ""
    },
    DipCourse:{
        type: String,
        default: ""
    },
    OtherDipCourse:{
        type: String,
        default: ""
    },
    ItiCourse:{
        type: String,
        default: ""
    },
    OtherItiCourse:{
        type: String,
        default: ""
    },
    Employeed:{
        type: String,
        default: ""
    },
    EmploymentStatus:{
        type: String,
        default: ""
    },
    OtherEmploymentStatus:{
        type: String,
        default: ""
    },
    Satisfaction:{
        type: String,
        default: ""
    },
    KeySkills:{
        type: String,
        default: ""
    },
    OtherKeySkills:{
        type: String,
        default: ""
    },
    JobImp:{
        type: String,
        default: ""
    },
    OtherJobImp:{
        type: String,
        default: ""
    },
    RateAva:{
        type: String,
        default: ""
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