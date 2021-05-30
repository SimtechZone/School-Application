package com.school.school.controller;

//Imports
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.school.entities.Student;
import com.school.school.services.StudentService;

// Controller controlling all the requests
@CrossOrigin
@RestController
public class StudentController {

//	Instantiating the service to perform actions called from requests
	@Autowired
	private StudentService studentService;

//	Get Request for a testing home route
	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}

//	Get requests for getting record of all the students
	@GetMapping("/students")
	public List<Student> getStudents() {
		return this.studentService.getStudent();
	}
	
//  Get request for getting the record of a particular student
	@GetMapping("/students/{studentId}")
	public Student getStudent(@PathVariable String studentId) {
		return this.studentService.getStudent(Long.parseLong(studentId));
	}

//	Post request to add a new Student
	@PostMapping("/students")
	public Student addStudent(@RequestBody Student student) {
		return this.studentService.addStudent(student);
	}

//	Put request to update the record of a particular record of student
	@PutMapping("/students")
	public Student updateStudent(@RequestBody Student student) {
		return this.studentService.updateStudent(student);
	}
	
//	Delete request to delete a student record
	@DeleteMapping("/students/{studentId}")
	public ResponseEntity deleteStudent(@PathVariable String studentId) {
		try {
			this.studentService.deleteStudent(Long.parseLong(studentId));
			return new ResponseEntity(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
