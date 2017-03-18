import React from 'react';
import {NavLink} from 'react-router-dom';

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
                <li><NavLink to="/" exact onClick={() => props.onClose()} activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/code" onClick={() => props.onClose()} activeClassName="active">Code</NavLink></li>
                <li><NavLink to="/aboutme" onClick={() => props.onClose()} activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" onClick={() => props.onClose()} activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}
