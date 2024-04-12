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





    //  aspi form
    DreamCareer:{
        type: String,
        default: ""
    },
    OtherDreamCareer:{
        type: String,
        default: ""
    },
    DreamCareerField:{
        type: String,
        default: ""
    },
    OtherDreamCareerField:{
        type: String,
        default: ""
    },
    InfluenceFactor:{
        type: String,
        default: ""
    },
    OtherInfluenceFactor:{
        type: String,
        default: ""
    },
    Scale:{
        type: String,
        default: ""
    },
    GovSupport:{
        type: String,
        default: ""
    },
    GovScheme:{
        type: String,
        default: ""
    },
    FormalTrainEdu:{
        type: String,
        default: ""
    },
    EduTrainProg:{
        type: String,
        default: ""
    },
    ClgUniDegreeProg:{
        type: String,
        default: ""
    },
    UnderGradCourseProg:{
        type: String,
        default: ""
    },
    OtherUnderGradCourseProg:{
        type: String,
        default: ""
    },
    UnderGradFieldProg:{
        type: String,
        default: ""
    },
    OtherUnderGradFieldProg:{
        type: String,
        default: ""
    },
    UnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherUnderGradBranchProg:{
        type: String,
        default: ""
    },
    PGCourseProg:{
        type: String,
        default: ""
    },
    OtherPGCourseProg:{
        type: String,
        default: ""
    },
    PGFieldProg:{
        type: String,
        default: ""
    },
    OtherPGFieldProg:{
        type: String,
        default: ""
    },
    PGBranchProg:{
        type: String,
        default: ""
    },
    OtherPGBranchProg:{
        type: String,
        default: ""
    },
    OtherClgUniDegreeProg:{
        type: String,
        default: ""
    },
    VocTechProg:{
        type: String,
        default: ""
    },
    VTPCourseByIti:{
        type: String,
        default: ""
    },
    OtherVTPCourseByIti:{
        type: String,
        default: ""
    },
    VTPCourseByPoly:{
        type: String,
        default: ""
    },
    OtherVTPCourseByPoly:{
        type: String,
        default: ""
    },
    OtherVocTechProg:{
        type: String,
        default: ""
    },
    OCCProg:{
        type: String,
        default: ""
    },
    OCCUnderGradCourseProg:{
        type: String,
        default: ""
    },
    OtherOCCUnderGradCourseProg:{
        type: String,
        default: ""
    },
    OCCUnderGradFieldProg:{
        type: String,
        default: ""
    },
    OtherOCCUnderGradFieldProg:{
        type: String,
        default: ""
    },
    OCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OCCPGCourseProg:{
        type: String,
        default: ""
    },
    OtherOCCPGCourseProg:{
        type: String,
        default: ""
    },
    OCCPGFieldProg:{
        type: String,
        default: ""
    },
    OtherOCCPGFieldProg:{
        type: String,
        default: ""
    },
    OCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherOCCPGBranchProg:{
        type: String,
        default: ""
    },
    OCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherOCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherOCCProg:{
        type: String,
        default: ""
    },
    AppProg:{
        type: String,
        default: ""
    },
    OtherAppProg:{
        type: String,
        default: ""
    },
    EnterpreProg:{
        type: String,
        default: ""
    },
    OtherEduTrainProg:{
        type: String,
        default: ""
    },
    FurEduTrain:{
        type: String,
        default: ""
    },

    FTEduTrainProg:{
        type: String,
        default: ""
    },
    FTClgUniDegreeProg:{
        type: String,
        default: ""
    },
    FTUnderGradCourseProg:{
        type: String,
        default: ""
    },
    OtherFTUnderGradCourseProg:{
        type: String,
        default: ""
    },
    FTUnderGradFieldProg:{
        type: String,
        default: ""
    },
    OtherFTUnderGradFieldProg:{
        type: String,
        default: ""
    },
    FTUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherFTUnderGradBranchProg:{
        type: String,
        default: ""
    },
    FTPGCourseProg:{
        type: String,
        default: ""
    },
    OtherFTPGCourseProg:{
        type: String,
        default: ""
    },
    FTPGFieldProg:{
        type: String,
        default: ""
    },
    OtherFTPGFieldProg:{
        type: String,
        default: ""
    },
    FTPGBranchProg:{
        type: String,
        default: ""
    },
    OtherFTPGBranchProg:{
        type: String,
        default: ""
    },
    OtherFTClgUniDegreeProg:{
        type: String,
        default: ""
    },
    FTVocTechProg:{
        type: String,
        default: ""
    },
    FTVTPCourseByIti:{
        type: String,
        default: ""
    },
    OtherFTVTPCourseByIti:{
        type: String,
        default: ""
    },
    FTVTPCourseByPoly:{
        type: String,
        default: ""
    },
    OtherFTVTPCourseByPoly:{
        type: String,
        default: ""
    },
    OtherFTVocTechProg:{
        type: String,
        default: ""
    },
    FTOCCProg:{
        type: String,
        default: ""
    },
    FTOCCUnderGradCourseProg:{
        type: String,
        default: ""
    },
    OtherFTOCCUnderGradCourseProg:{
        type: String,
        default: ""
    },
    FTOCCUnderGradFieldProg:{
        type: String,
        default: ""
    },
    OtherFTOCCUnderGradFieldProg:{
        type: String,
        default: ""
    },
    FTOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherFTOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    FTOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    OtherFTOCCUnderGradBranchProg:{
        type: String,
        default: ""
    },
    FTOCCPGCourseProg:{
        type: String,
        default: ""
    },
    OtherFTOCCPGCourseProg:{
        type: String,
        default: ""
    },
    FTOCCPGFieldProg:{
        type: String,
        default: ""
    },
    OtherFTOCCPGFieldProg:{
        type: String,
        default: ""
    },
    FTOCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherFTOCCPGBranchProg:{
        type: String,
        default: ""
    },
    FTOCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherFTOCCPGBranchProg:{
        type: String,
        default: ""
    },
    OtherFTOCCProg:{
        type: String,
        default: ""
    },
    FTAppProg:{
        type: String,
        default: ""
    },
    OtherFTAppProg:{
        type: String,
        default: ""
    },
    FTEnterpreProg:{
        type: String,
        default: ""
    },
    OtherFTEduTrainProg:{
        type: String,
        default: ""
    },


    // support form
    BigChal:{
        type: String,
        default: ""
    },
    OtherBigChal:{
        type: String,
        default: ""
    },
    SOR:{
        type: String,
        default: ""
    },
    Sector:{
        type: String,
        default: ""
    },
    OtherSector:{
        type: String,
        default: ""
    },
    SectorEnterp:{
        type: String,
        default: ""
    },
    OtherSectorEnterp:{
        type: String,
        default: ""
    },
    MinMonthlyIncome:{
        type: String,
        default: ""
    },
    SST:{
        type: String,
        default: ""
    },
    OtherSST:{
        type: String,
        default: ""
    },
    Chal:{
        type: String,
        default: ""
    },
    OtherChal:{
        type: String,
        default: ""
    },


    //  mig form
    WTE:{
        type: String,
        default: ""
    },
    WillJobOpp:{
        type: String,
        default: ""
    },
    WillMigHome:{
        type: String,
        default: ""
    },
    NotWillMig:{
        type: String,
        default: ""
    },
    OutDisWUT:{
        type: String,
        default: ""
    },
    WillDis:{
        type: String,
        default: ""
    },
    DisWillToMig:{
        type: String,
        default: ""
    },
    WillMigOutUT:{
        type: String,
        default: ""
    },
    CityToMig:{
        type: String,
        default: ""
    },
    ReasonCityToMig:{
        type: String,
        default: ""
    },
    ReasonDisToMig:{
        type: String,
        default: ""
    },
    WillMigOutInd:{
        type: String,
        default: ""
    },
    CountryToMig:{
        type: String,
        default: ""
    },
    ReasonCountryToMig:{
        type: String,
        default: ""
    },
    ReasonNotWillOutInd:{
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