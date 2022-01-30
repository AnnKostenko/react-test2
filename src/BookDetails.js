import React from "react";


function BookDetails(book){
    return(
        <>
        {{book}.book.book.volumeInfo.title &&
            <h3 className="book__item-title">
              {{book}.book.book.volumeInfo.title}
            </h3>
          }
          <div className="book__item-details">
            {{book}.book.book.volumeInfo.imageLinks.smallThumbnail &&
                <img src ={{book}.book.book.volumeInfo.imageLinks.smallThumbnail} alt={{book}.book.book.volumeInfo.title}/>
            }
            {{book}.book.book.volumeInfo.subtitle &&
                <h4><strong>Подзаголовок: </strong>{{book}.book.book.volumeInfo.subtitle}</h4>
            }
            {{book}.book.book.volumeInfo.description &&
                <p><strong>Описание: </strong>{{book}.book.book.volumeInfo.description}</p>
            }
            {{book}.book.book.volumeInfo.authors &&
                <p><strong>Авторы: </strong>{{book}.book.book.volumeInfo.authors}</p>
            }
            {{book}.book.book.accessInfo.webReaderLink &&
                <a href={{book}.book.book.accessInfo.webReaderLink}>Читать фрагмент</a>
            }
          </div>
        </>
    )
    
}

export default BookDetails