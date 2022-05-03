package com.example.demo.model;

public class Book_user {
	public String bookname;
	public String username;
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Book_user(String name,String user)
	{
		this.bookname=name;
		this.username=user;
	}
	public Book_user(){
		
	}

}
