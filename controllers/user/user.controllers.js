const express = require('express');
const User = require('../../models/User');
// const bcrypt = require('bcrypt');

// user controllers



// const Updateuser = async (req, res) => {
//     if(req.body.password){
//         try{
//             const salt = await bcrypt.genSalt(10);
//             req.body.password = await bcrypt.hash(req.body.password, salt);
//         }catch(err){
//             return res.status(500).json(err);
//         }
//     }

//     try{
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//             $set: req.body,
//         }, {new:true});
//         res.status(200).json(updatedUser);
//     }catch(err){
//         return res.status(500).json(err);
//     }
// }


// const GetUser = async (req, res) => {
//     try{
//         const user = await User.findById(req.params.id) 
//         const { password, ...other } = user._doc;
//         res.status(200).json(other);
//     }catch(err){
//         res.status(500).json(err);
//     }
// }

// const DeleteUser = async (req, res) =>{
//     try{
//         await User.findByIdAndDelete(req.param.id)
//         res.status(200).json(`user has been deleted.`)
//     }catch(err){
//         res.status(500).json(err)
//     }
// }
const Createuser = async (req, res) => {
    try{

        const newUser = new User({
            // gen form
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            Gender: req.body.Gender,
            DOB: req.body.DOB,
            Age: req.body.Age,
            Email: req.body.Email,
            Division: req.body.Division,
            District: req.body.District,
            Block: req.body.Block,
            PinCode: req.body.PinCode,
            PinArea: req.body.PinArea,
            OtherPinArea: req.body.OtherPinArea,
            PhoneNumber: req.body.PhoneNumber,
            AdhaarNumber: req.body.AdhaarNumber,
            MaritalStatus: req.body.MaritalStatus,
            Religion: req.body.Religion,
            OtherReligion: req.body.OtherReligion,
            Category: req.body.Category,
            SocailClass: req.body.SocailClass,
            AgeGroup: req.body.AgeGroup,
            MFI: req.body.MFI,


            //  ed form
            Qualification: req.body.Qualification,
            OtherQualification: req.body.OtherQualification,
            Stream: req.body.Stream,
            OtherStream: req.body.OtherStream,
            Subject: req.body.Subject,
            OtherSubject: req.body.OtherSubject,
            Course: req.body.Course,
            OtherCourse: req.body.OtherCourse,
            Field: req.body.Field,
            OtherField: req.body.OtherField,
            Branch: req.body.Branch,
            OtherBranch: req.body.OtherBranch,
            Mphill: req.body.Mphill,
            Phd: req.body.Phd,
            Prof: req.body.Prof,
            DipCourse: req.body.DipCourse,
            OtherDipCourse: req.body.OtherDipCourse,
            ItiCourse: req.body.ItiCourse,
            OtherItiCourse: req.body.OtherItiCourse,
            Employeed: req.body.Employeed,
            EmploymentStatus: req.body.EmploymentStatus,
            OtherEmploymentStatus: req.body.OtherEmploymentStatus,
            Satisfaction: req.body.Satisfaction,
            KeySkills: req.body.KeySkills,
            OtherKeySkills: req.body.OtherKeySkills,
            JobImp: req.body.JobImp,
            OtherJobImp: req.body.OtherJobImp,
            RateAva: req.body.RateAva,


            //  aspi form
            DreamCareer: req.body.DreamCareer || "",
            OtherDreamCareer: req.body.OtherDreamCareer || "",
            DreamCareerField: req.body.DreamCareerField || "",
            OtherDreamCareerField: req.body.OtherDreamCareerField || "",
            InfluenceFactor: req.body.InfluenceFactor || "",
            OtherInfluenceFactor: req.body.OtherInfluenceFactor || "",
            Scale: req.body.Scale || "",
            GovSupport: req.body.GovSupport || "",
            GovScheme: req.body.GovScheme || "",


            FormalTrainEdu: req.body.FormalTrainEdu || "",

            EduTrainProg: req.body.EduTrainProg || "",
            ClgUniDegreeProg: req.body.ClgUniDegreeProg || "",
            UnderGradCourseProg: req.body.UnderGradCourseProg || "",
            OtherUnderGradCourseProg: req.body.OtherUnderGradCourseProg || "",
            UnderGradFieldProg: req.body.UnderGradFieldProg || "",
            OtherUnderGradFieldProg: req.body.OtherUnderGradFieldProg || "",
            UnderGradBranchProg: req.body.UnderGradBranchProg || "",
            OtherUnderGradBranchProg: req.body.OtherUnderGradBranchProg || "",
            PGCourseProg: req.body.PGCourseProg || "",
            OtherPGCourseProg: req.body.OtherPGCourseProg || "",
            PGFieldProg: req.body.PGFieldProg || "",
            OtherPGFieldProg: req.body.OtherPGFieldProg || "",
            PGBranchProg: req.body.PGBranchProg || "",
            OtherPGBranchProg: req.body.OtherPGBranchProg || "",
            OtherClgUniDegreeProg: req.body.OtherClgUniDegreeProg || "",
            VocTechProg: req.body.VocTechProg || "",
            VTPCourseByIti: req.body.VTPCourseByIti || "",
            OtherVTPCourseByIti: req.body.OtherVTPCourseByIti || "",
            VTPCourseByPoly: req.body.VTPCourseByPoly || "",
            OtherVTPCourseByPoly: req.body.OtherVTPCourseByPoly || "",
            OtherVocTechProg: req.body.OtherVocTechProg || "",
            OCCProg: req.body.OCCProg || "",
            OCCUnderGradCourseProg: req.body.OCCUnderGradCourseProg || "",
            OtherOCCUnderGradCourseProg: req.body.OtherOCCUnderGradCourseProg || "",
            OCCUnderGradFieldProg: req.body.OCCUnderGradFieldProg || "",
            OtherOCCUnderGradFieldProg: req.body.OtherOCCUnderGradFieldProg || "",
            OCCUnderGradBranchProg: req.body.OCCUnderGradBranchProg || "",
            OtherOCCUnderGradBranchProg: req.body.OtherOCCUnderGradBranchProg || "",
            OCCPGCourseProg: req.body.OCCPGCourseProg || "",
            OtherOCCPGCourseProg: req.body.OtherOCCPGCourseProg || "",
            OCCPGFieldProg: req.body.OCCPGFieldProg || "",
            OtherOCCPGFieldProg: req.body.OtherOCCPGFieldProg || "",
            OCCPGBranchProg: req.body.OCCPGBranchProg || "",
            OtherOCCPGBranchProg: req.body.OtherOCCPGBranchProg || "",
            OtherOCCProg: req.body.OtherOCCProg || "",
            AppProg: req.body.AppProg || "",
            OtherAppProg: req.body.OtherAppProg || "",
            EnterpreProg: req.body.EnterpreProg || "",
            OtherEduTrainProg: req.body.OtherEduTrainProg || "",
            FurEduTrain: req.body.FurEduTrain || "",




            FTEduTrainProg: req.body.FTEduTrainProg || "",
            FTClgUniDegreeProg: req.body.FTClgUniDegreeProg || "",
            FTUnderGradCourseProg: req.body.FTUnderGradCourseProg || "",
            OtherFTUnderGradCourseProg: req.body.OtherFTUnderGradCourseProg || "",
            FTUnderGradFieldProg: req.body.FTUnderGradFieldProg || "",
            OtherFTUnderGradFieldProg: req.body.OtherFTUnderGradFieldProg || "",
            FTUnderGradBranchProg: req.body.FTUnderGradBranchProg || "",
            OtherFTUnderGradBranchProg: req.body.OtherFTUnderGradBranchProg || "",
            FTPGCourseProg: req.body.FTPGCourseProg || "",
            OtherFTPGCourseProg: req.body.OtherFTPGCourseProg || "",
            FTPGFieldProg: req.body.FTPGFieldProg || "",
            OtherFTPGFieldProg: req.body.OtherFTPGFieldProg || "",
            FTPGBranchProg: req.body.FTPGBranchProg || "",
            OtherFTPGBranchProg: req.body.OtherFTPGBranchProg || "",
            OtherFTClgUniDegreeProg: req.body.OtherFTClgUniDegreeProg || "",
            FTVocTechProg: req.body.FTVocTechProg || "",
            FTVTPCourseByIti: req.body.FTVTPCourseByIti || "",
            OtherFTVTPCourseByIti: req.body.OtherFTVTPCourseByIti || "",
            FTVTPCourseByPoly: req.body.FTVTPCourseByPoly || "",
            OtherFTVTPCourseByPoly: req.body.OtherFTVTPCourseByPoly || "",
            OtherFTVocTechProg: req.body.OtherFTVocTechProg || "",
            FTOCCProg: req.body.FTOCCProg || "",
            FTOCCUnderGradCourseProg: req.body.FTOCCUnderGradCourseProg || "",
            OtherFTOCCUnderGradCourseProg: req.body.OtherFTOCCUnderGradCourseProg || "",
            FTOCCUnderGradFieldProg: req.body.FTOCCUnderGradFieldProg || "",
            OtherFTOCCUnderGradFieldProg: req.body.OtherFTOCCUnderGradFieldProg || "",
            FTOCCUnderGradBranchProg: req.body.FTOCCUnderGradBranchProg || "",
            OtherFTOCCUnderGradBranchProg: req.body.OtherFTOCCUnderGradBranchProg || "",
            FTOCCPGCourseProg: req.body.FTOCCPGCourseProg || "",
            OtherFTOCCPGCourseProg: req.body.OtherFTOCCPGCourseProg || "",
            FTOCCPGFieldProg: req.body.FTOCCPGFieldProg || "",
            OtherFTOCCPGFieldProg: req.body.OtherFTOCCPGFieldProg || "",
            FTOCCPGBranchProg: req.body.FTOCCPGBranchProg || "",
            OtherFTOCCPGBranchProg: req.body.OtherFTOCCPGBranchProg || "",
            FTOtherOCCProg: req.body.OtherFTOCCProg || "",
            FTAppProg: req.body.FTAppProg || "",
            OtherFTAppProg: req.body.OtherFTAppProg || "",
            FTEnterpreProg: req.body.FTEnterpreProg || "",
            OtherFTEduTrainProg: req.body.OtherFTEduTrainProg || "",
            
        
        
            // support form
            BigChal: req.body.BigChal || "",
            OtherBigChal: req.body.OtherBigChal || "",
            SOR: req.body.SOR || "",
            Sector: req.body.Sector || "",
            OtherSector: req.body.OtherSector || "",
            SectorEnterp: req.body.SectorEnterp || "",
            OtherSectorEnterp: req.body.OtherSectorEnterp || "",
            MinMonthlyIncome: req.body.MinMonthlyIncome || "",
            SST: req.body.SST || "",
            OtherSST: req.body.OtherSST || "",
            Chal: req.body.Chal || "",
            OtherChal: req.body.OtherChal || "",



            //  mig form
            WTE: req.body.WTE || "",
            WillJobOpp: req.body.WillJobOpp || "",
            WillMigHome: req.body.WillMigHome || "",
            NotWillMig: req.body.NotWillMig || "",
            OutDisWUT: req.body.OutDisWUT || "",
            WillDis: req.body.WillDis || "",
            DisWillToMig: req.body.DisWillToMig || "",
            ReasonDisToMig: req.body.ReasonDisToMig || "",
            WillMigOutUT: req.body.WillMigOutUT || "",
            CityToMig: req.body.CityToMig || "",
            ReasonCityToMig: req.body.ReasonCityToMig || "",
            WillMigOutInd: req.body.WillMigOutInd || "",
            CountryToMig: req.body.CountryToMig || "",
            ReasonCountryToMig: req.body.ReasonCountryToMig || "",
            ReasonNotWillOutInd: req.body.ReasonNotWillOutInd || ""

        });
        
        // const newUser = new User()

        const user = await newUser.save();
        // console.log("user: ", user);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

}

const GetAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = { GetAllUsers, Createuser }