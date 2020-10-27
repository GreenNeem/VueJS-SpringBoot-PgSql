package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Person;
import com.example.demo.repositories.PersonRepository;
@Service
public class PeopleServiceImp implements PeopleService{
	@Autowired
	private PersonRepository repository;
	
	@Override
	public List<Person> findAllPeople() {		
		return (List<Person>)repository.findAll();
	}

	@Override
	public Person findById(long id) {
		Optional<Person> result=repository.findById(id);
		if(result.isPresent()) return result.get();
		else return null;
	}

	@Override
	public Person insert(Person p) {		
		return repository.save(p);
	}

	@Override
	public boolean delete(long id) {
		try {
			repository.deleteById(id);
			return true;
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
			return false;
		}		
	}

	@Override
	public boolean update(Person p) {
		try {
			repository.save(p);
			return true;			
		}catch(Exception ex) {
			System.out.print(ex.getMessage());
			return false;
		}
	}

}
