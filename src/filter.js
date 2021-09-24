import React, { useState, useEffect, useRef } from "react";
import bookJson from "./myBooks.json";

export default function Filter({ setFlashcards }) {
  const chunkedBooks = bookJson.Books;

  const [bookLength, setBookLength] = useState("Any");
  const [genre, setGenres] = useState("Any");
  useEffect(() => {
    filterBooks();
  }, [bookLength]);

  const handleLengthOnChange = e => {
    setBookLength(e.target.value);
  };

  const filterBooks = () => {
    let newList = [];

    bookJson.Books.map((book, i) => {
      if (
        bookLength === "Any" ||
        bookLengthAmounts(book.pages) === bookLength
      ) {
        newList.push(book);
      }
    });    

    setFlashcards(newList);

  };

  const bookLengthAmounts = pages => {
    if (pages <= 150) {
      return "Short";
    } else if (pages <= 400) {
      return "Medium";
    } else if (pages >= 400) {
      return "Long";
    }
  };

  return (
    <div>
      <input
        type="radio"
        id="Any"
        name="drone"
        value="Any"
        onChange={handleLengthOnChange}
      />
      <label for="Any">Any</label>
      <input
        type="radio"
        id="Short"
        name="drone"
        value="Short"
        onChange={handleLengthOnChange}
      />
      <label for="Short">Short</label>
      <input
        type="radio"
        id="Medium"
        name="drone"
        value="Medium"
        onChange={handleLengthOnChange}
      />
      <label for="Any">Medium</label>
      <input
        type="radio"
        id="Long"
        name="drone"
        value="Long"
        onChange={handleLengthOnChange}
      />
      <label for="Any">Long</label>
    </div>
  );
}
