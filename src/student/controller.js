
const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req,res)=> {
  pool.query(queries.getStudents, (error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
  }
  );
};

const getStudentById = (req,res)=>{
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById,[id],(error,results)=> {

    if(error) throw error;
    res.status(200).json(results.rows);
  });

};

const addStudent = (req,res)=>{
  const { first_name, last_name,grade_and_section} = req.body;

  pool.query(queries.checkEmailExists, [first_name],(error,results)=>{

    if (results.rows.length){
      res.send("Already exists");
    };

    pool.query 

  })

}

module.exports = {

    getStudents, 
    getStudentById,
    addStudent,
};