import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useEffect, useContext } from 'react';
import BookContext from './context/Books';

function App() {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;