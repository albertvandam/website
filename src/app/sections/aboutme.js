import React from 'react';
import {Link} from 'react-router';

'use strict';

export default function (props) {
    return (
        <div className="homeAboutContainer">
            <div className="homeAbout">
                <h1>{props.title}</h1>

                {props.content.map((paragraph, index) => {
                    return (
                        <p key={index}>{paragraph}</p>
                    );
                })}

                <div className="buttons">
                    <Link to="aboutme">Full Profile</Link>
                </div>
            </div>
        </div>
    );
}
