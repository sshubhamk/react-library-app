import { useState } from "react";
import useBookContext from "../hooks/use-hooks-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { onBookEdit } = useBookContext();

  const onChangeClick = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitClick = (event) => {
    event.preventDefault();
    onSubmit();
    onBookEdit(book.id, title);
  };

  return (
    <form onSubmit={onSubmitClick} className="book-edit">
      <lable> Title</lable>
      <input className="input" value={title} onChange={onChangeClick} />
      <button className="button is-primary">Save </button>
    </form>
  )
}

export default BookEdit;