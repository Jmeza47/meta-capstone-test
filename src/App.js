import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './pages/Book';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='book' element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
