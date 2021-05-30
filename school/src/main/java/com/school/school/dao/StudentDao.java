package com.school.school.dao;

//imports
import org.springframework.data.jpa.repository.JpaRepository;

import com.school.school.entities.Student;


// An interface extending JpaRepository to fetch data from the database
public interface StudentDao extends JpaRepository<Student, Long> {

}
