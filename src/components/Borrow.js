
import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import borrowServices from "../services/borrowServices";
const Borrow=() =>{
    const [borrows,setBorrows] =useState([]);
    useEffect(() => {
        borrowServices.getAll()
          .then(response => {
            console.log('Printing borrow data', response.data);
            setBorrows(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      },[])

      const handleDelete = (id) => {
        console.log('Printing id', id);
       borrowServices.remove(id)
          .then(response => {
            console.log('borrow deleted successfully', response.data);
            borrowServices.getAll()
          .then(response => {
            console.log('Printing books data', response.data);
            setBorrows(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
          })
          .catch(error => {
            console.log('Something went wrong', error);
          })
      }
      return(
          <div className="container">
          <h3>table of borrows</h3>
          <hr/>
          <div>
          <table className="table table-bordered table-striped">
          <thead className="thead-dark">
          <tr>
    <td>Username</td>
    <td>Borrowed Book</td>
    
    </tr>
          </thead>
          <tbody>
    {
        borrows.map(b=>(
            <tr key={b.borrowId}>
        <td>{b.borrowerName} </td>
        <td>{b.bookName}</td>
        <td>
        <button className="btn btn-danger ml-2" onClick={() => {
          handleDelete(b.borrowId);
        }} >
        Return book</button>
        </td>
        </tr>
        ))
    }
    </tbody>
          </table>
          </div>
          </div>
      )
}
export default Borrow;