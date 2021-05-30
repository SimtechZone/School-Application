// Imports from npm packages
import axios from "axios";
import React, { useEffect, useState } from "react";
import proxy from "../api/bootapi";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


// Functional Component of Adding the student
const AddStudent = () => {


  // Changing the title of document at the time of rendering
  useEffect(() => {
    document.title = "Add Student";
  }, []);


  //react hook form, destructuring the features
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // To format the data according to the database
  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    // console.log(d);

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };


  // State containing the state of data loading from back end
  const [student, setStudent] = useState({});


  // Function called at the time of submitting form
  const onSubmit = (data) => {
    // console.log(data);
    const sid = Date.now() + Math.floor(Math.random() * 1000);
    const scurrentDate = formatDate(Date.now());
    setStudent({ ...data, id: sid, currentDate: scurrentDate });
    console.log(student);
    postDatatoServer(student);
  };


  // Function requesting to post data to server
  const postDatatoServer = (data) => {
    axios.post(`${proxy}/students`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Student details added successfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };


  // Rendering the component, Using reactstap for components
  return (
    <>
      <h1 className="text-center my-3">Fill Student Detail</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="studentName">Student name</Label>
          <Input
            type="text"
            placeholder="Enter here"
            id="sname"
            {...register("name", { required: "Please enter your first name" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </FormGroup>
        <FormGroup>
          <Label for="fatherName">Father's name</Label>
          <Input
            type="text"
            placeholder="Enter here"
            id="fatherName"
            {...register("fatherName", {
              required: "Please enter your father's name",
            })}
          />
          {errors.fatherName && (
            <p className="text-danger">{errors.fatherName.message}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="dob">Date of Birth</Label>
          <Input
            type="date"
            id="dateOfBirth"
            required
            {...register("dateOfBirth")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            placeholder="Enter Address here"
            id="address"
            required
            {...register("address")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            placeholder="Enter city here"
            id="city"
            required
            {...register("city")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            placeholder="Enter state here"
            id="state"
            required
            {...register("state")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pin">Pin code</Label>
          <Input
            type="text"
            placeholder="Enter Pin here"
            id="pin"
            required
            {...register("pin")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="telNo">Phone Number</Label>
          <Input
            id="phoneNum"
            type="tel"
            {...register("phoneNum", {
              required: "Please enter phone number",
              minLength: { value: 9, message: "Minimum length is 10" },
              maxlength: { value: 14, message: "Too Long" },
            })}
          />
          {errors.phoneNum && (
            <p className="text-danger">{errors.phoneNum.message}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email id</Label>
          <Input
            type="email"
            placeholder="Enter email here"
            id="email"
            required
            {...register("email")}
          />
        </FormGroup>
        <FormGroup>
          <Label for="classNum">Class</Label>
          <select
            type="select"
            id="classNum"
            class="form-select"
            required
            {...register("classNum")}
          >
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="marks">Marks (in %)</Label>
          <Input
            type="number"
            placeholder="Enter marks here"
            id="marks"
            max={100}
            min={0}
            required
            {...register("marks")}
          />
        </FormGroup>
        <Container className="text-center my-4">
          <Button type="reset" outline invert color="warning mx-2">
            Clear
          </Button>
          <Button type="submit" outline invert color="success mx-2">
            Add Student
          </Button>
        </Container>
      </Form>
    </>
  );
};


// Exporting the Component
export default AddStudent;
