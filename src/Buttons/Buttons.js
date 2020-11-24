import React from 'react';
import './Buttons.css';

export default function Buttons() {
    return (
        <div>
        <a href="https://twitter.com/home" className="icon-button twitter"><i className="fab fa-twitter" /><span /></a>
        <a href="https://www.linkedin.com/feed/" className="icon-button facebook"><i className="fab fa-facebook-f" /><span /></a>
        <a href="https://www.instagram.com/thecuriousthinkerspodcast/" className="icon-button instagram"><i className="fab fa-instagram" /><span /></a>
        </div>
    )
}
