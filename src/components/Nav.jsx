import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import LibraryLogo from '../assets/Library.svg'

function Nav({cart}){
    function openMenu(){
        document.body.classList += " menu--open";
    } 

    function closeMenu (){
        document.body.classList.remove("menu--open");
    }

    const cartNumber = () => {
        let totalItems = 0;
        cart.forEach(book => {
            totalItems += book.quantity;
        })
        return totalItems;
    }

    return (
        <nav>
            <div className="nav__container"> 
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo"></img>
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link"> Home </Link>
                        <Link to="/books" className="nav__link"> Books </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}> 
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        {
                            cartNumber() > 0 && <span className="cart__length">{cartNumber()}</span>
                        }
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="times" onClick={closeMenu}/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link">Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link">Books</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/" className="menu__link">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;