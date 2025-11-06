const Student=require('../models/student.model');

const createStudent = async(req,res)=>{
    try{
        const {id,name,email}=req.body;

        const newStudent=new Student({id,name,email});

        await newStudent.save();

        res.status(201).json(newStudent);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const getAllStudents=async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const getStudentById=async(req,res)=>{
    try{
        const {id}=req.params;
        const student=await Student.findById(id);

         if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(student);
    }
    catch(error){
         res.status(500).json({ message: error.message });
    }
};

const updateStudent=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email}=req.body;
        const updatedstudent=await Student.findByIdAndUpdate(
             id,
             {name,email},
            { new: true }
        );
      if (!updatedstudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedstudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent=async(req,res)=>{
    try{
        const {id}=req.params;
        const deletedstudent=await Student.findByIdAndDelete(id);
          if (!deletedstudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({message:'student successfully deleted'});
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports={
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};