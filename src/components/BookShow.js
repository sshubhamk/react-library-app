import { useState } from 'react';
import useBookContext from '../hooks/use-hooks-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {

  const [showEdit, setShowEdit] = useState(false);
  const { onDeleteBook } = useBookContext();

  const onDeleteClick = () => {
    onDeleteBook(book.id);
  }

  const onEditClick = () => {
    setShowEdit(!showEdit);
  }

  const onSubmitClick = () => {
    setShowEdit(false);
  }

  let content = <h3> {book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={onSubmitClick} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt={book.title} src={`https://picsum.photos/seed/${+book.id + 1}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={onEditClick}>
          Edit
        </button>
        <button className="delete" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>);
}

export default BookShow;