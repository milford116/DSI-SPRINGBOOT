import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import { useEffect } from "react/cjs/react.development";
import booksServices from "../services/books.services";

const AddBook= () => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[published, setPublished] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveBook = (e) => {
        e.preventDefault();
        
        const book = {title,description,published,id};
        if (id) {
            //update
           booksServices.update(id,book)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            booksServices.create(book)
            .then(response => {
                console.log("employee added successfully", response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            booksServices.get(id)
                .then(book => {
                    setTitle(book.data.title);
                    setDescription(book.data.description);
                    setPublished(book.data.published);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Book</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Description"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="published"
                        value={published}
                        onChange={(e) => setPublished(e.target.value)}
                        placeholder="Enter Published"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveBook(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddBook;