
import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import borrowServices from "../services/borrowServices";
import userServices from "../services/userServices";
const Userlist=() =>{
    const [users,setUsers] =useState([]);

    const [books,setBooks]=useState([]);
    const [selectval,setSelectval]=useState(0);
    useEffect(() => {
        userServices.getAll()
          .then(response => {
            console.log('Printing user data', response.data);
            setUsers(response.data);
            axios.get(`http://localhost:8080/api/books`).then((res) => {
          setBooks(res.data);
        });
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      },[])
     

      const handle_borrow=(user,bookname)=>{
          console.log('print',user,bookname);
          let borrow={
            borrowerName:user,
            bookName:bookname
          }
          axios.post("http://localhost:8080/api/borrow",borrow).then((response)=>{
              console.log(response.data);
          }).catch(() => {
            console.log("Data Unavailable here");

        })
    
      }
      const setval=(e)=>{
        e.preventDefault();
        setSelectval(e.target.value);
      }
      return(
          <div className="container">
          <h3>table of Users</h3>
          <hr/>
          <div>
          <table className="table table-bordered table-striped">
          <thead className="thead-dark">
          <tr>
    <td>Username</td>
    <td>Email</td>
    
    </tr>
          </thead>
          <tbody>
    {
        users.map(b =>(
            <tr key={b.id}>
        <td>{b.username} </td>
        <td>{b.email}</td>
        <td>
        <select id="dropdown" onChange={setval} >
                {books.map((countryData) => (
                  <option key={countryData} value={countryData.title}>
                    {countryData.title}
                  </option>
                ))}
              </select>
        <button className="btn btn-danger ml-2" 
        onClick={() => {
            handle_borrow(b.username,selectval);
          }}>borrow book</button></td>
        </tr>
      
        ))
    }
    </tbody>
    
          </table>
          <Link to="/" className="btn btn-primary mb-2">Back to book-list</Link>
          </div>
          </div>
      )
}
export default Userlist;