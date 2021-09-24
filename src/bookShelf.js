import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Flashcard from './Flashcard'

export default function BookShelf({flashcards}) {


  return (
    <div className='card-grid'>
      {flashcards.map((book, i) => {
       return <Flashcard book={book} image={book.image} key={i}></Flashcard>
      })}
    </div>
  );
}
