package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Person;

public interface PeopleService {
	 	List<Person> findAllPeople();
	    Person findById(long id);
	    Person insert(Person p);
	    boolean delete(long id);
	    boolean update(Person p);
}
