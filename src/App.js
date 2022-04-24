import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './components/AddBook';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<BookList/>} />
            <Route path="/add" element={<AddBook/>} />
            <Route path="/books/edit/:id" element={<AddBook/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;