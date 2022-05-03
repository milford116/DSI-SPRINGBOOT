package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Borrow;

public interface BorrowRepository extends JpaRepository<Borrow, Long> {
	List<Borrow> findByBorrowerName(String borrowerName);
	List<Borrow> findByBookName(String bookName);
	void deleteByBookName(String bookname);

}
