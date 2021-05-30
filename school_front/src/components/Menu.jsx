// Imports from the installed packages
import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";


// Functional component
const Menu = () => {


  // Rendering the component
  return (
    <ListGroup horizontal>
      <Link className="list-group-item list-group-item-action" tag="a" to="/">
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-student"
      >
        Add Student
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/view-students"
      >
        View Students
      </Link>
    </ListGroup>
  );
};


// Exporting the component
export default Menu;
