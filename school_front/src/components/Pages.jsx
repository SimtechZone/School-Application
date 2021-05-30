// Imports from the installed packages
import axios from "axios";
import React, { useEffect, useState } from "react";
import proxy from "../api/bootapi";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import StudentTableRow from "./StudentTableRow";
import ReactPaginate from "react-paginate";


// Functional component
const Pages = () => {


    // Changing the title of document at the time of component rendering using UseEffect() hook
  useEffect(() => {
    document.title = "All Students";
  }, []);


  //   Requesting the server to get the data stored in database using axios library
  const getAllStudentsFromServer = () => {
    axios.get(`${proxy}/students`).then(
      (response) => {
        console.log(response.data);
        toast.success("Student data has been loaded", {
          position: "bottom-right",
        });
        setStudent(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-right",
        });
      }
    );
  };

  
  //   As loading the data is asynchronous, so we are using useEffect hook to load the data from the server
  //   once the component has been loaded.
  useEffect(() => {
    getAllStudentsFromServer();
  }, []);


  //   State defined for currentPage and data rendered from the backend
  const [currentPage, setCurrentPage] = useState(0);
  const [student, setStudent] = useState([]);


  //   For the Pagination of the data
  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageDate = student.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(student.length / PER_PAGE);


  //   Handler for when student record is navigated using pagination.
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };


  //   Handler for deleting the student record.
  const updateStudents = (id) => {
    setStudent(student.filter((c) => c.id !== id));
  };


  //   Rendering the component
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>S .no</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone#</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
          {currentPageDate.length > 0 ? (
            currentPageDate.map((item) => (
              <StudentTableRow
                key={item.id}
                student={item}
                update={updateStudents}
              />
            ))
          ) : (
            <h2 className="text-center my-5">No student record available</h2>
          )}
        </tbody>
      </Table>
    </>
  );
};


// Exporting the document
export default Pages;
