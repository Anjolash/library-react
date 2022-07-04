import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <div>
            <section id="landing">
                <header>
                    <div className="header__container">
                        <div className="header__Description">
                            <h1>Australia's most awarded online library platform</h1>
                            <h2>Find your dream book with <span className="purple">Library</span></h2>
                            <Link to="/books" className="header__btn" >
                                <button className="btn">Browse books</button>
                            </Link>
                        </div>
                        <figure className="header__img--wrapper">
                            <img src={UndrawBooks} alt="" />                
                        </figure>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Landing;
