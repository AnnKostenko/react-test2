import React from "react";


function BookDetails({book}){
    const {title, imageLinks, subtitle, description, authors} = book.volumeInfo;
    return(
        <>
        {title &&
            <h3 className="book__item-title">
              {title}
            </h3>
          }
          <div className="book__item-details">
            {imageLinks.smallThumbnail &&
                <img src ={imageLinks.smallThumbnail} alt={title}/>
            }
            {subtitle &&
                <h4><strong>Подзаголовок: </strong>{subtitle}</h4>
            }
            {description &&
                <p><strong>Описание: </strong>{description}</p>
            }
            {authors &&
                <p><strong>Авторы: </strong>{authors}</p>
            }
            {book.accessInfo.webReaderLink &&
                <a href={book.accessInfo.webReaderLink}>Читать фрагмент</a>
            }
          </div>
        </>
    )
    
}

export default BookDetails