import React, { useState} from "react";
import "./index.css";

export default function Flashcard({ book, image }) {
  
  let picture = require("./imagesBooks/" + image);

  const [flip, setFlip] = useState();
  

  const rowLen = book.genre.length-1;
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <img className="imageFlip" alt="books" src={picture.default} />{" "}
      </div>
      <div className="back">
        <div className="title">{book.title}</div>
        <div>
          {"written by "}
          {book.author}
        </div>
        <div>
            {"published in "}
          {book.published} {" at "}
          {book.pages}{" pages"}
        </div>
        <div className="genres">{"Genres include: "}
        {book.genre.map((genre, i) => {
          return <span key={i}>{genre}{rowLen===i?'':', '} </span>;
        })}</div>
      </div>

      {/* {flip?book.title:book.author} */}
    </div>
  );
}
