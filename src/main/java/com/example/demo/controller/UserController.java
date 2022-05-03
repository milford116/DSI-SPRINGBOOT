package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
@CrossOrigin( "*")
@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired 
	UserRepository userrepository;
	@GetMapping("/user")
	public List<User> getAllMembers(){
		return userrepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<Optional<User>>getUserById(@PathVariable(value = "id") long memberId) {
		Optional<User> member = userrepository.findById(memberId);
		return ResponseEntity.ok().body(member);
	}
	
	@PostMapping("/user")
	public User addMember(@Valid @RequestBody User member) {
		return userrepository.save(member);
	}

}
