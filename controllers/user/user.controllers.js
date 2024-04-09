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
            Qualification: req.body.Qualification,
            OtherQualification: req.body.OtherQualification,
            Stream: req.body.Stream,
            OtherStream: req.body.OtherStream,
            Subject: req.body.Subject,
            OtherSubject: req.body.OtherSubject,
            UnderGradCourse: req.body.UnderGradCourse,
            OtherUnderGradCourse: req.body.OtherUnderGradCourse,
            UnderGradField: req.body.UnderGradField,
            OtherUnderGradField: req.body.OtherUnderGradField,
            UnderGradBranch: req.body.UnderGradBranch,
            OtherUnderGradBranch: req.body.OtherUnderGradBranch,
            GradCourse: req.body.GradCourse,
            OtherGradCourse: req.body.OtherGradCourse,
            GradField: req.body.GradField,
            OtherGradField: req.body.OtherGradField,
            GradBranch: req.body.GradBranch,
            OtherGradBranch: req.body.OtherGradBranch,
            PGCourse: req.body.PGCourse,
            OtherPGCourse: req.body.OtherPGCourse,
            PGField: req.body.PGField,
            OtherPGField: req.body.OtherPGField,
            PGBranch: req.body.PGBranch,
            OtherPGBranch: req.body.OtherPGBranch,
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
            RateAva: req.body.RateAva
        });
        
        // const newUser = new User()
        console.log("newuser: ", newUser);
        // console.log("newuser: ", newUser);
        
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