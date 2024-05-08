
//CRUD Queries

const getStudents = "SELECT * FROM teachers";

const getStudentById = "SELECT * FROM teachers WHERE id = $1";

const checkEmailExists = "SELECT s FROM teachers s WHERE s.first_name = $1";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,

};