import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userServices from "../services/userServices";
const AddUser= () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveUser = (e) => {
        e.preventDefault();
        
        const user = {username,email,password,id};
       
            //create
            userServices.create(user)
            .then(response => {
                console.log("employee added successfully", response.data);
                navigate("/user");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        
    }

    // useEffect(() => {
    //     if (id) {
    //         booksServices.get(id)
    //             .then(book => {
    //                 setTitle(book.data.title);
    //                 setDescription(book.data.description);
    //                 setPublished(book.data.published);
    //             })
    //             .catch(error => {
    //                 console.log('Something went wrong', error);
    //             })
    //     }
    // }, [])
    return(
        <div className="container">
            <h3>Add User</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveUser(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )

}
export default AddUser;