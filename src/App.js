import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BookShelf from "./bookShelf";
import bookJson from "./myBooks.json";

function App() {
  const [flashcards, setFlashcards] = useState(bookJson.Books);

  return (
    <div className="App">
      <div>
        <input type="radio" id="Any" name="drone" value="Any" checked />
        <label for="Any">Any</label>
        <input type="radio" id="Short" name="drone" value="Short" checked />
        <label for="Short">Short</label>
        <input type="radio" id="Medium" name="drone" value="Medium" checked />
        <label for="Any">Medium</label>
        <input type="radio" id="Long" name="drone" value="Long" checked />
        <label for="Any">Long</label>
      </div>
      <BookShelf flashcards={flashcards}></BookShelf>
    </div>
  );
}

export default App;
