import React from 'react';
import {Link} from 'react-router-dom';
import aboutMeConfig from '../../config/aboutme';

'use strict';

export default function () {
    return (
        <div className="homeAboutContainer">
            <div className="homeAbout">
                <h1>{aboutMeConfig.title}</h1>

                {aboutMeConfig.content.map((paragraph, index) => {
                    return (
                        <p key={index}>{paragraph}</p>
                    );
                })}

                <div className="buttons">
                    <Link to="/aboutme">Full Profile</Link>
                </div>
            </div>
        </div>
    );
}
