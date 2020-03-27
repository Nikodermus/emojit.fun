import React from 'react';
import { Link } from 'gatsby';

const StaticItems = () => (
    <nav className="static-items">
        <div className="static-items__item main-logo">
            <Link to="/">
                <h1>
                    emoj<span className="main-logo__highlight">it</span>
                </h1>
            </Link>
        </div>
        <span className="static-items__item description">
            Adivina películas, libros y más, solo con 🌵💻👽
        </span>
        <a
            href="https://www.linkedin.com/in/nikodermus/"
            target="_blank"
            rel="noopener noreferrer"
            className="static-items__item author"
        >
            <figure className="bubble">
                <span className="bubble__emoji">💻</span>
                <figcaption className="bubble__text">@nikodermus</figcaption>
            </figure>
        </a>
        <a
            href="https://github.com/Nikodermus/emojit.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="static-items__item contribuiting"
        >
            <figure className="bubble">
                <span className="bubble__emoji">🗣</span>
                <figcaption className="bubble__text">Contribuir</figcaption>
            </figure>
        </a>
    </nav>
);

export default StaticItems;
