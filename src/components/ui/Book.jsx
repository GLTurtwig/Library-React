import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Price from './Price'

const Book = ({ book }) => {
const [img, setImg] = useState(); 

const mountedRef = useRef(true);

useEffect(() => {
    const image = new Image();
    image.src = book.url; 
    image.onload = () =>{
        if (mountedRef){
            setImg(image);
        }
    };
    return () => {
        //test
        mountedRef.current = false;
    }
})

    return (

        <div className="book">

            {img ? (
                <>
                <Link to={`/books/${book.id}`}>
                    <figure className="book__img--wrapper">
                        <img src={img.src} alt="" className="book__img"  />
                    </figure>
                </Link>


                 <div className="book__title">
                    <Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
                </div>


                <Rating rating={book.rating} />

                <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                </>
            ) : (
                <>
                <div className="book__img--skeleton"/>
                <div className="skeleton book__title--skeleton"/>
                <div className="skeleton book__rating--skeleton"/>
                <div className="skeleton book__price--skeleton"/>
                </>
            )}
 
        </div>
    )
}

export default Book;