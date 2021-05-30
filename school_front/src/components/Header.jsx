// Imports from the installed packages
import React from "react";
import { Card, CardBody } from "reactstrap";


// Functional component
function Header() {


  // Rendering the component
  return (
    <div>
      <Card className="my-2" style={{backgroundColor:"#c0fefc"}}>
        <CardBody>
          <h1 className="text-center my-2">Welcome to Student Application</h1>
        </CardBody>
      </Card>
    </div>
  );
}


// Exporting the component
export default Header;
