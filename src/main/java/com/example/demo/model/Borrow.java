package com.example.demo.model;
import javax.persistence.*;
@Entity 
@Table(name = "borrow")
public class Borrow {
	@Id @GeneratedValue
	private long borrowId;

	@Column(name = "borrowername")
	private String borrowerName;

	@Column(name = "bookname")
	private String bookName;

	public long getBorrowId() {
		return borrowId;
	}

	public void setBorrowId(long borrowId) {
		this.borrowId = borrowId;
	}

	public String getBorrowerName() {
		return borrowerName;
	}

	public void setBorrowerName(String borrowerName) {
		this.borrowerName = borrowerName;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	

	
	
	
	

	
	

}


