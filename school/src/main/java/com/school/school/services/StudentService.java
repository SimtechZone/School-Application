package com.school.school.services;

//imports
import java.util.List;
import com.school.school.entities.Student;

// Interface used to define methods for services and is being called by controller
public interface StudentService {
	public List<Student> getStudent();

	public Student getStudent(long studentId);

	public Student addStudent(Student student);

	public Student updateStudent(Student student);

	public void deleteStudent(long studentId);
}
