package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.Borrow;
import com.example.demo.model.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.BorrowRepository;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("borrow")
public class BorrowController {
	@Autowired
	BorrowRepository borrowRepository;
	@Autowired
	BookRepository bookRepository;
	@Autowired
	UserRepository userRepository;
	
	@GetMapping
	public List<Borrow> getAllBorrow() {
		return borrowRepository.findAll();
	}
	@GetMapping("/findByBorrowerId")
	public List<Borrow> getByBorrowerId(@RequestParam(value="borrowerId")long borrowerId){
		return borrowRepository.findByBorrowerId(borrowerId);
	}
	
	@GetMapping("/findByBookId")
	public List<Borrow> getByBookId(@RequestParam(value="bookId")long bookId){
		return borrowRepository.findByBookId(bookId);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Borrow>> getBorrowById(@PathVariable(value = "id") long id) {
		Optional<Borrow> borrow = borrowRepository.findById(id);
		return ResponseEntity.ok().body(borrow);
	}
	
	@PostMapping
	public String addBorrow(@Valid @RequestBody Borrow borrow) {
		User member = userRepository.findById(borrow.getBorrowerId()).get();
		Book book = bookRepository.findById(borrow.getBookId()).get();
		
//		if (book.getStock() < 1) {
//			return "Your requested book \"" + book.getTitle() + "\" is out of stock!";
//		}
//		
//		book.borrowedOne();
		bookRepository.save(book);
		
		borrowRepository.save(borrow);
		return member.getUsername() + " has borrowed one copy of \"" + book.getTitle() + "\"!";
	}

}
