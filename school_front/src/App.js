// Imports from the installed packages
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { HashRouter as Router, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Pages from "./components/Pages";


// Functional App component 
function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={12}>
              <Menu />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Route path="/" component={Home} exact />
              <Route path="/add-student" component={AddStudent} exact />
              <Route path="/view-students" component={Pages} exact />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}


// Exporting the component
export default App;
