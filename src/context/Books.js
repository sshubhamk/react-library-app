import { createContext } from "react";
import { useState, useCallback } from 'react';
import axios from 'axios';

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const apiUrl = 'http://localhost:3005/books';

  const fetchBooks = useCallback (async () => {
    const res = await axios.get(apiUrl);
    setBooks(res.data);
  }, []);

  const onCreateBook = async (title) => {
    const response = await axios.post(apiUrl, {
      title
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const onBookEdit = async (id, title) => {
    const res = await axios.put(apiUrl + `/${id}`, { title });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const onDeleteBook = async (id) => {
    await axios.delete(apiUrl + `/${id}`);
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  }

  const valueToShare = {
    books,
    fetchBooks,
    onCreateBook,
    onBookEdit,
    onDeleteBook,
  }

  return (
    <BookContext.Provider value={valueToShare}> {children} </BookContext.Provider>
  );
}

export { Provider };
export default BookContext;