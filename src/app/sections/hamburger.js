import React from 'react';

export default function (props) {
    return (
        <div className="hamburger"><i className="material-icons" onClick={() => props.onClick()}>menu</i></div>
    );
}
