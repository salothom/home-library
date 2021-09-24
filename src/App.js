import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BookShelf from "./bookShelf";
import bookJson from "./myBooks.json";
import Filter from './filter'


function App() {
  const [flashcards, setFlashcards] = useState();
  return (
    <div className="App">
      <Filter setFlashcards={setFlashcards}></Filter>
      {flashcards&&<BookShelf flashcards={flashcards}></BookShelf>}
    </div>
  );
}

export default App;
