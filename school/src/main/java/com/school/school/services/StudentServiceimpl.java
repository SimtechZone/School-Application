package com.school.school.services;

//imports
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.school.dao.StudentDao;
import com.school.school.entities.Student;


//Class implementing the Service interface and implementing all the methods of interface.
@Service
public class StudentServiceimpl implements StudentService {

//	Instantiating the Database StudentDao class to perform operations with DB.
	@Autowired
	private StudentDao studentDao;

//	Constructor
	public StudentServiceimpl() {
		// TODO Auto-generated constructor stub
	}

//	Handling the GET request to find all the students.
	public List<Student> getStudent() {
		// TODO Auto-generated method stub
		return studentDao.findAll();
	}

//	Handling the GET request to find student using a particular Id.
	public Student getStudent(long studentId) {
		// TODO Auto-generated method stub
		Student entityStudent = studentDao.findById(studentId).get();
		return entityStudent;
	}

//	Handling a POST request to add a new student to DB.
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		studentDao.save(student);
		return student;
	}

//	Handling the PUT request to update the existing data in DB.
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
		studentDao.save(student);
		return student;
	}

//	Handling the DELETE request to delete a particular student record from DB.
	public void deleteStudent(long studentId) {
		// TODO Auto-generated method stub
		Student entityStudent = studentDao.getById(studentId);
		studentDao.delete(entityStudent);

	}

}
