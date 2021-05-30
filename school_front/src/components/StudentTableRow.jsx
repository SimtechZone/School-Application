// Imports from the installed packages
import axios from "axios";
import React from "react";
import proxy from "../api/bootapi";
import { toast } from "react-toastify";
import { Button } from "reactstrap";


// Functional component
const StudentTableRow = ({ student, update }) => {


  // Handler to delete the student record using axios and updating the whole table by passing id of deleted record to parent container 
  const deleteStudent = (id) => {
    axios.delete(`${proxy}/students/${id}`).then(
      (response) => {
        toast.success("Student record deleted");
        update(id);
      },
      (error) => {
        toast.error("Couldn't delete record !! Internal server error");
      }
    );
  };

// Rendering the component
  return (
    <>
      <tr className="my-2">
        <th>{student.id}</th>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.phoneNum}</td>
        <td>{student.classNum}</td>
        <td>{student.marks}</td>
        <td>
          <Button color="warning me-2">Update</Button>
          <Button
            color="danger"
            onClick={() => {
              deleteStudent(student.id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};


// Exporting the component
export default StudentTableRow;
