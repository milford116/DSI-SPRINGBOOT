import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import booksServices from "../services/books.services";
import 'bootstrap/dist/css/bootstrap.min.css';
const BookList
 = () => {
   const [books,setBooks] =useState([]);

   useEffect(() => {
    booksServices.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  },[])

 
   const handleDelete = (id) => {
    console.log('Printing id', id);
   booksServices.remove(id)
      .then(response => {
        console.log('book deleted successfully', response.data);
        booksServices.getAll()
      .then(response => {
        console.log('Printing books data', response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  return (
    <div className="container">
    <h3>table of books</h3>
    <hr/>
    <div>
    <Link to="/add" className="btn btn-primary mb-2">Add Book</Link>
    <table className="table table-bordered table-striped">
          <thead className="thead-dark">
    <tr>
    <td>Title</td>
    <td>description</td>
    <td>published</td>
    <td>Action</td>
    </tr>
    </thead>
    <tbody>
    {
      books.map(book=>(
        <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.description}</td>
        <td>{book.published}</td>
        <td>
                  
        <Link className="btn btn-info" to={`/books/edit/${book.id}`}>Update</Link>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(book.id);
                  }}>Delete</button>
                </td>
        </tr>
      ))
    }
    </tbody>
    </table>
    </div>
    </div>
    );
}
 
export default BookList
;