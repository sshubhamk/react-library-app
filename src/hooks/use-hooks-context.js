import { useContext } from "react";
import BookContext from "../context/Books";

function useBookContext() {
  return useContext(BookContext);
}

export default useBookContext;