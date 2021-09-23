import React from "react";
import bookJson from "./myBooks.json";

export default function BookShelf() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./imagesBooks", false, /\.(png|jpe?g|svg)$/)
  );
console.log(images)
  return (
    <div>
    
      
      <img alt="books" src={images[4]} />
      {bookJson.Books.map((book, i) => {

        return (
          <div key={i}>
            <img alt="books" src={images[i].default} />
            {/* <div>{book.title}</div> */}
          </div>
        );
      })}
    </div>
  );
}
