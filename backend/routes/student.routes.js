const express=require('express');

const router=express.Router();

const{
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
}=require('../controllers/student.controller');

router.post("/createstudent",createStudent);

router.get("/students",getAllStudents);

router.get("/student/:id",getStudentById);

router.put("/student/:id",updateStudent);

router.delete("/student/:id",deleteStudent);

module.exports=router;

