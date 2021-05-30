package com.school.school.entities;

//imports
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;


//Creating a entity class to model an entity for DB.
@Entity
public class Student {

//	Primary key id and other fields
	@Id
	private long id;
	private String name;
	private String fatherName;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dateOfBirth;
	private String address;
	private String city;
	private String state;
	private long pin;
	private String phoneNum;
	private String email;
	private int classNum;
	private long marks;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date currentDate;

//	Constructor
	public Student(long id, String name, String fatherName, Date dateOfBirth, String address, String city, String state,
			long pin, String phoneNum, String email, int classNum, long marks, Date currentDate) {
		super();
		this.id = id;
		this.name = name;
		this.fatherName = fatherName;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.phoneNum = phoneNum;
		this.email = email;
		this.classNum = classNum;
		this.marks = marks;
		this.currentDate = currentDate;
	}

//	Default constructor
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

//	Getters and setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPin() {
		return pin;
	}

	public void setPin(long pin) {
		this.pin = pin;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getClassNum() {
		return classNum;
	}

	public void setClassNum(int classNum) {
		this.classNum = classNum;
	}

	public long getMarks() {
		return marks;
	}

	public void setMarks(long marks) {
		this.marks = marks;
	}

	public Date getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(Date currentDate) {
		this.currentDate = currentDate;
	}

//	To string method
	@Override
	public String toString() {
		return "Student [name=" + name + ", fatherName=" + fatherName + ", dateOfBirth=" + dateOfBirth + ", address="
				+ address + ", city=" + city + ", state=" + state + ", pin=" + pin + ", phoneNum=" + phoneNum
				+ ", email=" + email + ", classNum=" + classNum + ", marks=" + marks + ", currentDate=" + currentDate
				+ "]";
	}

}
