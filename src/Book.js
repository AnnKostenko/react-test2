import React, { useState } from "react";
import BookDetails from "./BookDetails";

function Book({books}) {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  
  const addToWishlistHandler = id => {
    if (!wishlist.includes(id)) setWishlist(wishlist.concat(id));
  };

  const removeWishlistHandler = id => {
    let indexItem = wishlist.indexOf(id);
    let itemsBook = [...wishlist.slice(0, indexItem), ...wishlist.slice(indexItem + 1)];
    setWishlist(itemsBook);
  };
 
  let searchBooks= books.filter(book => {
    if (search === "") {
      return book;
    } else if (book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  });

  let findWishlist = books.filter(book => wishlist.includes(book.id) );

  return (
    <div className="main">
      <div className="book__search">
        <label>Поиск</label>
        <input
          type="text"
          placeholder="Поиск"
          onChange={event => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="book">
        <div className="book__list">
          <h2>Все книги в категории "Пушкин"</h2>
          {searchBooks.map(book => {
            return (
              <div key={book.id} className="book__item">
                <BookDetails book= {book}/>
                <button onClick={() => addToWishlistHandler(book.id)}>
                  Добавить в избранное
                </button>
              </div>
            );
          })}
        </div>

        <div className="book__list --wishlist">
          <h2>Мои книги</h2>
          {findWishlist.map(book => {
            return (
              <div key={book.id} className="book__item">
                <BookDetails book= {book}/>
                <button onClick={() => removeWishlistHandler(book.id)}>
                  Удалить
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Book;
