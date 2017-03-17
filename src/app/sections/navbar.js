import React from 'react';
import {Link} from 'react-router';

export default function (props) {
    if (window.innerWidth < 640 && !props.visible) {
        return (
            <div>&nbsp;</div>
        );
    }

    return (
        <nav className="header">
            <ul>
                <li><i className="material-icons menuClose" onClick={() => props.onClose()}>close</i></li>
                <li><Link to="/" onClick={() => props.onClose()} activeClassName="active">Home</Link></li>
                <li><Link to="/code" onClick={() => props.onClose()} activeClassName="active">Code</Link></li>
                <li><Link to="/aboutme" onClick={() => props.onClose()} activeClassName="active">About</Link></li>
                <li><Link to="/contact" onClick={() => props.onClose()} activeClassName="active">Contact</Link></li>
            </ul>
        </nav>
    );
}
