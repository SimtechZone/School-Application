// Imports from the installed packages
import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";


// Functional component
const Home = () => {


  // Changing the title of document at the time of component rendering using UseEffect() hook
  useEffect(() => {
    document.title = "Home";
  }, []);


  // Rendering the component
  return (
    <div>
      <Jumbotron
        className="text-center py-5"
        style={{ backgroundColor: "#e1f1dd" }}
      >
        <h1>Student Application</h1>
        <p>Presenting an easy way to add, delete and update student data</p>
      </Jumbotron>
    </div>
  );
};


// Exporting the component
export default Home;
