package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.Book_user;
import com.example.demo.model.Borrow;
import com.example.demo.model.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.BorrowRepository;
import com.example.demo.repository.UserRepository;
@CrossOrigin( "*")
@RestController
@RequestMapping("/api")
public class BorrowController {
	@Autowired
	BorrowRepository borrowRepository;
	@Autowired
	BookRepository bookRepository;
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/borrow")
	public List<Borrow> getAllBorrow() {
		
		return borrowRepository.findAll();
	}
	@GetMapping("/findByBorrowerName/{name}")
	public List<Borrow> getByBorrowerId(@PathVariable(value="name")String borrowerId){
		return borrowRepository.findByBorrowerName(borrowerId);
	}
	
	@GetMapping("/findByBookName/{name}")
	public List<Borrow> getByBookId(@PathVariable(value="name")String bookId){
		return borrowRepository.findByBookName(bookId);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Borrow>> getBorrowById(@PathVariable(value = "id") long id) {
		Optional<Borrow> borrow = borrowRepository.findById(id);
		return ResponseEntity.ok().body(borrow);
	}
	
	@PostMapping("/borrow")
	public Borrow addBorrow(@Valid @RequestBody Borrow borrow) {
//		User member = userRepository.findById(borrow.getBorrowerId()).get();
//		Book book = bookRepository.findById(borrow.getBookId()).get();
		
//		if (book.getStock() < 1) {
//			return "Your requested book \"" + book.getTitle() + "\" is out of stock!";
//		}
//		
//		
//		bookRepository.save(borrow.);
//		
		borrowRepository.save(borrow);
		return borrow;
	}
	
	@DeleteMapping("/borrow/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
		try {
			borrowRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
