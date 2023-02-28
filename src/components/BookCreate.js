import { useState } from "react";
import useBookContext from "../hooks/use-hooks-context";

function BookCreate() {
  const [bookTitle, setBookTitle] = useState('');

  const { onCreateBook } = useBookContext();

  const onBookChange = (event) => {
    setBookTitle(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onCreateBook(bookTitle);
    setBookTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onFormSubmit}>
        <label> Book Title </label>
        <input className="input" value={bookTitle} onChange={onBookChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate;